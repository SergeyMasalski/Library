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
    if (this.cardService.sortParams === this.cardService.getHeadersInTable[0]) {
      return this.cardService.sortID();
    }

    if (this.cardService.sortParams === this.cardService.getHeadersInTable[1]) {
      return this.cardService.sortVisitorsNames();
    }

    if (this.cardService.sortParams === this.cardService.getHeadersInTable[2]) {
      return this.cardService.sortBookNames();
    }

    if (this.cardService.sortParams === this.cardService.getHeadersInTable[3]) {
      return this.cardService.sortBorrowDate();
    }

    return [];
  }
}
