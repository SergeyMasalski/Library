import { Component, Input } from '@angular/core';
import { CardPageService } from 'src/app/servises/modules/card-page/card-page.service';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent {
  @Input()
  tableHeaders!: string[];

  constructor(private cardService: CardPageService) {}

  get tableBody(): any[] {
    return this.cardService.getCardsTable;
  }
}
