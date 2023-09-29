import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardPageService } from 'src/app/servises/modules/card-page/card-page.service';

@Component({
  selector: 'sort-search-cards',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.scss'],
})
export class SortSearchComponentCards {
  public sortCard: FormGroup;
  public searchForm: FormGroup;

  constructor(private cardService: CardPageService) {
    this.sortCard = new FormGroup({
      sortValue: new FormControl(this.getSortValues[0]),
    });

    this.searchForm = new FormGroup({
      searchValue: new FormControl(''),
    });
  }

  get getSortValues(): string[] {
    return this.cardService.getHeadersInTable.slice(0, -1);
  }

  public sortCards(): void {
    this.cardService.sortParams = this.sortCard.controls['sortValue'].value;
  }

  public searchCards(): void {
    this.cardService.search = this.searchForm.controls['searchValue'].value;
  }
}
