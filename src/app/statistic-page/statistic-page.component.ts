import { Component } from '@angular/core';
import { StatisticPageService } from '../servises/modules/statistic-page/statistic-page.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent {
  constructor(private statisticServise: StatisticPageService) {}
}
