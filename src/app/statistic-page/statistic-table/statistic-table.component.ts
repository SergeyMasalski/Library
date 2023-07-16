import { Component } from '@angular/core';
import { Statistic } from 'src/app/entities/enums/statistic.enum';
import { StatisticPageService } from 'src/app/servises/modules/statistic-page/statistic-page.service';

@Component({
  selector: 'statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss'],
})
export class StatisticTableComponent {
  constructor(private statisticService: StatisticPageService) {}

  get getList(): (string | undefined)[] {
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
}
