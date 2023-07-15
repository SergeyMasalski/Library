import { Injectable } from '@angular/core';
import { Statistic } from 'src/app/entities/enums/statistic.enum';

@Injectable()
export class StatisticPageService {
  private statisticHeader: string = Statistic.MostActiveUsers;

  get getStatisticHeader() {
    return this.statisticHeader;
  }

  set setStatisticHeader(value: string) {
    this.statisticHeader = value;
  }
}
