import { Routes } from '@angular/router';
import { BooksPageComponent } from 'src/app/books-page/books-page.component';
import { CardsPageComponent } from 'src/app/cards-page/cards-page.component';
import { StatisticPageComponent } from 'src/app/statistic-page/statistic-page.component';
import { VisitorsPageComponent } from 'src/app/visitors-page/visitors-page.component';

export const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'visitors', component: VisitorsPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: '**', component: BooksPageComponent },
];
