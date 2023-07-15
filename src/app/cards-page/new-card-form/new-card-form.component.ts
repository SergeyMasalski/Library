import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookPageService } from 'src/app/servises/modules/book-page/book-page.service';
import { CardPageService } from 'src/app/servises/modules/card-page/card-page.service';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';
import { CommenApplicationNamespace } from '../../entities/interfaces/app.interfaces';

@Component({
  selector: 'new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
})
export class NewCardFormComponent {
  public newCardForm: FormGroup;

  constructor(
    private cardsService: CardPageService,
    private visitorsService: VisitorsPageService,
    private booksService: BookPageService
  ) {
    this.newCardForm = new FormGroup({
      visitor: new FormControl(
        `${this.visitorsService.getVisitors[0].visitorFullName}`
      ),
      book: new FormControl(`${this.booksService.getBooks[0].name}`),
    });
  }

  get getVisitors(): CommenApplicationNamespace.Visitor[] {
    return this.visitorsService.getVisitors;
  }

  get getBooks(): CommenApplicationNamespace.Book[] {
    return this.booksService.getBooks;
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-form__close') {
        this.cardsService.closeFormNewCard();
      }

      if (event.target.className === 'container-form__save') {
        const book: string = this.newCardForm.controls['book'].value;
        const visitor: string = this.newCardForm.controls['visitor'].value;

        const findVisitor: CommenApplicationNamespace.Visitor | undefined =
          this.visitorsService.getVisitors.find(
            (item) => item.visitorFullName === visitor
          );
        const findBook: CommenApplicationNamespace.Book | undefined =
          this.booksService.getBooks.find((item) => item.name === book);

        if (
          findBook &&
          findVisitor &&
          this.booksService.issueBook(`${findBook.bookId}`)
        ) {
          this.cardsService.addCard({
            idCard: this.cardsService.nextCardId,
            bookId: findBook.bookId,
            visitorId: findVisitor.visitorId,
            tookBook: new Date(),
            returnBook: null,
          });

          this.cardsService.closeFormNewCard();
        }
      }
    }
  }
}
