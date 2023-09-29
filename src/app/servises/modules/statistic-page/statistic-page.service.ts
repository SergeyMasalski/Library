import { Injectable } from '@angular/core';
import { Statistic } from 'src/app/entities/enums/statistic.enum';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { CardPageService } from '../card-page/card-page.service';
import { BookPageService } from '../book-page/book-page.service';
import { VisitorsPageService } from '../visitors-page/visitors-page.service';

@Injectable()
export class StatisticPageService {
  private statisticHeader: string = Statistic.MostPopularBooks;

  constructor(
    private cardService: CardPageService,
    private booksService: BookPageService,
    private visitorsService: VisitorsPageService
  ) {}

  get getStatisticHeader() {
    return this.statisticHeader;
  }

  set setStatisticHeader(value: string) {
    this.statisticHeader = value;
  }

  get getPopularBooks(): CommenApplicationNamespace.showStatistic[] {
    const statisticArray: CommenApplicationNamespace.PopularBooks[] = [];
    const arrayBooksIDs = this.cardService.getCards.map((item) => item.bookId);
    for (let i = 1; i <= Math.max(...arrayBooksIDs); i++) {
      const filterArrayBooksIDs = arrayBooksIDs.filter(
        (bookId) => bookId === i
      );
      statisticArray.push({ idBook: i, quantity: filterArrayBooksIDs.length });
    }

    if (statisticArray) {
    }
    return statisticArray
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5)
      .map((item) => ({
        name: this.booksService.getBook(`${item.idBook}`)?.name,
        quantity: item.quantity,
      }));
  }

  get getActiveUsers(): CommenApplicationNamespace.showStatistic[] {
    const statisticArray: CommenApplicationNamespace.ActiveUsers[] = [];
    const arrayVisitorsIDs = this.cardService.getCards.map(
      (item) => item.visitorId
    );
    for (let i = 1; i <= Math.max(...arrayVisitorsIDs); i++) {
      const filterArrayVisitorsIDs = arrayVisitorsIDs.filter(
        (bookId) => bookId === i
      );
      statisticArray.push({
        idUser: i,
        quantity: filterArrayVisitorsIDs.length,
      });
    }

    return statisticArray
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5)
      .map((item) => ({
        name: this.visitorsService.getVisitor(`${item.idUser}`)
          ?.visitorFullName,
        quantity: item.quantity,
      }));
  }
}
