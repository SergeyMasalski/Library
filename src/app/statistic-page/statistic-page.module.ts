import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StatisticPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [StatisticPageComponent],
})
export class StatisticPageModule {}
