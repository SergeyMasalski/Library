import { Component, HostListener, Input } from '@angular/core';
import { PageNames } from '../entities/enums/pages.enum';
import { HeadersCardsTable } from '../entities/enums/header-table.enum';
import { CardPageService } from '../servises/modules/card-page/card-page.service';

@Component({
  selector: 'cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
})
export class CardsPageComponent {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-sub-header__element') {
        this.cardService.openFormNewCard();
      }

      if (event.target.className === 'table-body__column-return back') {
        const idCard = event.target.parentNode?.children[0].innerHTML;
        if (idCard) {
          const card = this.cardService.getCard(idCard);
          if (card) {
            this.cardService.returnBook(idCard);
          }
        }
      }
    }
  }

  public nameSubHeaders = PageNames;

  constructor(private cardService: CardPageService) {}

  get getHeadersInTable(): string[] {
    return Object.values(HeadersCardsTable);
  }

  get getDisplayFormNewCard(): boolean {
    return this.cardService.getDisplayNewCardForm;
  }
}
