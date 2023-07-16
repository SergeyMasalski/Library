import { Component, HostListener } from '@angular/core';
import { BookPageService } from 'src/app/servises/modules/book-page/book-page.service';

@Component({
  selector: 'sort-search-books',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.scss'],
})
export class SortSearchComponentBooks {
  public sortValue: string = this.getSortsValue[0];
  public searchValue: string = '';

  constructor(private booksService: BookPageService) {}

  get getSortsValue(): string[] {
    return this.booksService.getHeadersInTable;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.className === 'form-group__button sort') {
      if (this.sortValue === this.getSortsValue[0]) {
        this.booksService.sortBookIds();
      }

      if (this.sortValue === this.getSortsValue[1]) {
        this.booksService.sortBookName();
      }

      if (this.sortValue === this.getSortsValue[2]) {
        this.booksService.sortBookAuthor();
      }

      if (this.sortValue === this.getSortsValue[3]) {
        this.booksService.sortBookYear();
      }

      if (this.sortValue === this.getSortsValue[4]) {
        this.booksService.sortBookAuthor();
      }

      if (this.sortValue === this.getSortsValue[5]) {
        this.booksService.sortBookPages();
      }

      if (this.sortValue === this.getSortsValue[6]) {
        this.booksService.sortBookCopies();
      }
    }

    if (target.className === 'form-group__button search') {
      this.booksService.setSearch = this.searchValue;
    }
  }
}
