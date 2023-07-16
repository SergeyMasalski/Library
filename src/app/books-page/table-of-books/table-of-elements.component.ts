import { Component, Input, OnInit } from '@angular/core';
import { CommenApplicationNamespace } from '../../entities/interfaces/app.interfaces';
import { BookPageService } from 'src/app/servises/modules/book-page/book-page.service';

@Component({
  selector: 'table-of-books',
  templateUrl: './table-of-books.component.html',
  styleUrls: ['./table-of-books.component.scss'],
})
export class TableOfBooksComponent {
  @Input()
  tableHeaders!: string[];

  @Input()
  tableData!: CommenApplicationNamespace.Book[];

  constructor(private bookService: BookPageService) {}

  get tableDisaply(): CommenApplicationNamespace.Book[] {
    return this.tableData;
  }

  get searchDisaply(): CommenApplicationNamespace.Book[] {
    return this.bookService.getSearchBooks;
  }

  get showTable(): CommenApplicationNamespace.Book[] {
    if (this.bookService.getSearch === '') {
      return this.bookService.getBooks;
    }
    return this.bookService.getSearchBooks;
  }
}
