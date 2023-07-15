import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardPageService } from 'src/app/servises/modules/card-page/card-page.service';

@Component({
  selector: 'sort-search-cards',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.scss'],
})
export class SortSearchComponentCards {
  sortCard: FormGroup;

  constructor(private cardService: CardPageService) {
    this.sortCard = new FormGroup({
      sortValue: new FormControl(this.getSortValues[0]),
    });
  }

  get getSortValues(): string[] {
    return this.cardService.getHeadersInTable.slice(0, -1);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (event.target instanceof Element) {
      if (event.target.className === 'form-group__button sort') {
        this.cardService.sortParams = this.sortCard.controls['sortValue'].value;
      }
    }
  }
}
