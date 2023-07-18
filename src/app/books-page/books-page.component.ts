import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PageNames } from '../entities/enums/pages.enum';
import { BookPageService } from '../servises/modules/book-page/book-page.service';
import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';

@Component({
  selector: 'books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-sub-header__element') {
        this.displayNewBookForm = this.bookService.openFormNewBook;
      }

      if (event.target.className === 'container-form__close') {
        this.displayNewBookForm = this.bookService.closeFormNewBook;
        this.bookService.closeFormEditBook();
      }

      if (event.target.className === 'container-form__save') {
        this.displayNewBookForm = this.bookService.showValidate;
      }

      if (event.target.className === 'table-body__delete') {
        const currentId = event.target.parentNode?.children[0].innerHTML;

        if (currentId) {
          this.bookService.removeBook(currentId);
        }
      }

      if (event.target.className === 'table-body__edit') {
        this.bookService.openFormEditBook();
        const currentId = event.target.parentNode?.children[0].innerHTML;
        if (currentId) {
          const book = this.bookService.getBook(currentId);
          if (book) {
            this.bookService.setEditBook = book;
          }
        }
      }
    }
  }

  public nameSubHeaders = PageNames;
  public displayNewBookForm: boolean = this.bookService.closeFormNewBook;

  constructor(private bookService: BookPageService) {}

  get getHeadersInTable(): string[] {
    return this.bookService.getHeadersInTable;
  }

  get getBooks(): CommenApplicationNamespace.Book[] {
    return this.bookService.getBooks;
  }

  get displayEditForm(): boolean {
    return this.bookService.showValidateEditForm;
  }
}
