import { Component, HostListener } from '@angular/core';
import { Statistic } from 'src/app/entities/enums/statistic.enum';
import { StatisticPageService } from 'src/app/servises/modules/statistic-page/statistic-page.service';

@Component({
  selector: 'get-popular',
  templateUrl: './get-popular.component.html',
  styleUrls: ['./get-popular.component.scss'],
})
export class GetPopularComponent {
  public buttons: string[] = Object.values(Statistic);

  constructor(private statisticService: StatisticPageService) {}

  get getHeader(): string {
    return this.statisticService.getStatisticHeader;
  }

  public showSelectValue(value: string) {
    this.statisticService.setStatisticHeader = value;
  }
}
