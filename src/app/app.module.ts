import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BooksPageModule } from './books-page/books-page.module';
import { VisitorsPageModule } from './visitors-page/visitors-page.module';
import { CardsPageModule } from './cards-page/cards-page.module';
import { StatisticPageModule } from './statistic-page/statistic-page.module';
import { BookPageService } from './servises/modules/book-page/book-page.service';
import { VisitorsPageService } from './servises/modules/visitors-page/visitors-page.service';
import { CardPageService } from './servises/modules/card-page/card-page.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BooksPageModule,
    VisitorsPageModule,
    CardsPageModule,
    StatisticPageModule,
  ],
  providers: [BookPageService, VisitorsPageService, CardPageService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
