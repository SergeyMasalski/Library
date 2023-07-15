import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';

@Component({
  selector: 'sort-search-visitors',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.scss'],
})
export class SortSearchComponentVisitors {
  sortForm: FormGroup;

  constructor(private visiorService: VisitorsPageService) {
    this.sortForm = new FormGroup({
      sortVisitor: new FormControl(''),
    });
  }

  get getSortValue(): string[] {
    return this.visiorService.getHeadersInTable.slice(0, -1);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      if (event.target.className === 'form-group__button sort') {
        const selectedValue = this.sortForm.controls['sortVisitor'].value;

        if (selectedValue === this.getSortValue[0]) {
          this.visiorService.sortVisitorsIds();
        }

        if (selectedValue === this.getSortValue[1]) {
          this.visiorService.sortVisitorsNames();
        }
      }
    }
  }
}
