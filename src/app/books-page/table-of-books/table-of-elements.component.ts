import { Component, Input, OnInit } from '@angular/core';
import { CommenApplicationNamespace } from '../../entities/interfaces/app.interfaces';

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
}
