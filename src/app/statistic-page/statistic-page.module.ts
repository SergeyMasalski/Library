import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page.component';
import { SharedModule } from '../shared/shared.module';

import { GetPopularComponent } from './get-popular/get-popular.component';
import { StatisticPageService } from '../servises/modules/statistic-page/statistic-page.service';
import { StatisticTableComponent } from './statistic-table/statistic-table.component';

@NgModule({
  declarations: [StatisticPageComponent, GetPopularComponent, StatisticTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [StatisticPageComponent],
  providers: [StatisticPageService],
})
export class StatisticPageModule {}
