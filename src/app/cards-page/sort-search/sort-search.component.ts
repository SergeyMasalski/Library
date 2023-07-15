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
        const selectValue = this.sortCard.controls['sortValue'].value;

        if (selectValue === this.getSortValues[0]) {
          this.cardService.sortID();
        }

        if (selectValue === this.getSortValues[1]) {
          this.cardService.sortVisitorsNames();
        }

        if (selectValue === this.getSortValues[2]) {
          this.cardService.sortBookNames();
        }

        if (selectValue === this.getSortValues[3]) {
          this.cardService.sortBorrowDate();
        }

        if (selectValue === this.getSortValues[4]) {
        }
      }
    }
  }
}
