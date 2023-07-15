import { Component, HostListener, OnInit } from '@angular/core';

import { BookPageService } from 'src/app/servises/modules/book-page/book-page.service';

@Component({
  selector: 'edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent {
  public validate: boolean = false;

  public nameBook: string = this.bookservice.getEditsBook.name;
  public nameAuthor: string = this.bookservice.getEditsBook.authorName;
  public publishingYear: string = `${this.bookservice.getEditsBook.publishingYear.getFullYear()}`;
  public publishersName: string = this.bookservice.getEditsBook.publishersName;
  public numberofPages: string = `${this.bookservice.getEditsBook.numberOfPages}`;
  public numberofCopies: string = `${this.bookservice.getEditsBook.numberOfCopies}`;

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
        console.log(this.validate);
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
          this.bookservice.editBook(`${this.bookservice.idEditsBook}`, {
            bookId: this.bookservice.idEditsBook,
            name: this.nameBook,
            authorName: this.nameAuthor,
            publishingYear: new Date(+this.publishingYear, 1, 1),
            publishersName: this.publishersName,
            numberOfPages: +this.numberofPages,
            numberOfCopies: +this.numberofCopies,
          });

          this.bookservice.closeFormEditBook();
        }
      }
    }
  }
}
