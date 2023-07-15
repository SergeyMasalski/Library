import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookPageService } from 'src/app/servises/modules/book-page/book-page.service';

@Component({
  selector: 'new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.scss'],
})
export class NewBookFormComponent {
  public validate: boolean = false;

  public nameBook: string = '';
  public nameAuthor: string = '';
  public publishingYear: string = '';
  public publishersName: string = '';
  public numberofPages: string = '';
  public numberofCopies: string = '';

  constructor(private bookservice: BookPageService) {}

  public validateForm(
    nameBook: string,
    nameAuthor: string,
    publishingYear: string,
    publishersName: string,
    numberofPages: string,
    numberofCopies: string
  ): boolean {
    this.validate = true;
    const filterArray = Array.from(arguments).filter((item) => item !== '');

    switch (true) {
      case filterArray.length !== Array.from(arguments).length:
        this.validate = false;
        break;
      case Number.isNaN(+numberofPages) ||
        +numberofPages < 0 ||
        Number.isNaN(+numberofCopies) ||
        +numberofCopies < 0 ||
        Number.isNaN(+publishingYear):
        this.validate = false;
        break;
    }

    return this.validate;
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-form__save') {
        if (
          this.validateForm(
            this.nameBook,
            this.nameAuthor,
            this.publishingYear,
            this.publishersName,
            this.numberofPages,
            this.numberofCopies
          )
        ) {
          this.bookservice.addBook({
            bookId: this.bookservice.idBookNext,
            name: this.nameBook,
            authorName: this.nameAuthor,
            publishingYear: new Date(+this.publishingYear, 1, 1),
            publishersName: this.publishersName,
            numberOfPages: +this.numberofPages,
            numberOfCopies: +this.numberofCopies,
          });

          this.bookservice.closeFormNewBook;
          return;
        }

        this.bookservice.openFormNewBook;
      }
    }
  }
}
