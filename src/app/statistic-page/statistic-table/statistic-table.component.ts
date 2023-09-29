import { Component } from '@angular/core';
import { Statistic } from 'src/app/entities/enums/statistic.enum';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { StatisticPageService } from 'src/app/servises/modules/statistic-page/statistic-page.service';

@Component({
  selector: 'statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss'],
})
export class StatisticTableComponent {
  public headerMostPopularUsers = Statistic.MostActiveUsers;
  public headerMostPopularBooks = Statistic.MostPopularBooks;

  constructor(private statisticService: StatisticPageService) {}

  get getList(): CommenApplicationNamespace.showStatistic[] {
    if (
      this.statisticService.getStatisticHeader === Statistic.MostActiveUsers
    ) {
      return this.statisticService.getActiveUsers;
    }

    if (
      this.statisticService.getStatisticHeader === Statistic.MostPopularBooks
    ) {
      return this.statisticService.getPopularBooks;
    }
    return [];
  }

  get getSelectHeader(): string {
    return this.statisticService.getStatisticHeader ===
      this.headerMostPopularBooks
      ? this.headerMostPopularBooks
      : this.headerMostPopularUsers;
  }
}
