import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageComponent } from './cards-page.component';
import { SharedModule } from '../shared/shared.module';
import { CardTableComponent } from './card-table/card-table.component';
import { CardPageService } from '../servises/modules/card-page/card-page.service';
import { NewCardFormComponent } from './new-card-form/new-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortSearchComponentCards } from './sort-search/sort-search.component';

@NgModule({
  declarations: [
    CardsPageComponent,
    CardTableComponent,
    NewCardFormComponent,
    SortSearchComponentCards,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [CardsPageComponent],
  providers: [CardPageService],
})
export class CardsPageModule {}
