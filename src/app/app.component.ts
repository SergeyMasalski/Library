import { Component } from '@angular/core';
import { BOOKS } from './entities/mock/books.mock';
import { PageNames } from './entities/enums/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public books = BOOKS;
  public pageNames = PageNames;

  get availablePages() {
    return Object.values(this.pageNames);
  }
}
