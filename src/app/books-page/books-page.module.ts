import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksPageComponent } from './books-page.component';
import { SharedModule } from '../shared/shared.module';

import { NewBookFormComponent } from './new-book-form/new-book-form.component';
import { TableOfBooksComponent } from './table-of-books/table-of-elements.component';
import { EditBookFormComponent } from './edit-book-form/edit-book-form.component';
import { SortSearchComponentBooks } from './sort-search/sort-search.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    TableOfBooksComponent,
    NewBookFormComponent,
    EditBookFormComponent,
    SortSearchComponentBooks,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [BooksPageComponent],
  providers: [],
})
export class BooksPageModule {}
