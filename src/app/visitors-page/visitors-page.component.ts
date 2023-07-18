import { Component, HostListener } from '@angular/core';
import { PageNames } from '../entities/enums/pages.enum';
import { VisitorsPageService } from '../servises/modules/visitors-page/visitors-page.service';
import { CommenApplicationNamespace } from '../entities/interfaces/app.interfaces';

@Component({
  selector: 'visitors-page',
  templateUrl: './visitors-page.component.html',
  styleUrls: ['./visitors-page.component.scss'],
})
export class VisitorsPageComponent {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-sub-header__element') {
        this.visitorService.openFormNewVisitor();
      }

      if (event.target.className === 'table-body__edit') {
        const id = event.target.parentNode?.children[0].innerHTML;
        if (id) {
          this.visitorService.setEditVisitor(id);
        }
        this.visitorService.openFormEditVisitor();
      }

      if (event.target.className === 'table-body__delete') {
        const id = event.target.parentNode?.children[0].innerHTML;
        if (id) {
          this.visitorService.removeVisitor(id);
        }
      }
    }
  }

  public nameSubHeaders = PageNames;

  constructor(private visitorService: VisitorsPageService) {}

  get displayFormNewVisitor(): boolean {
    return this.visitorService.getDisplayFormNewVisitor;
  }

  get displayFormEditVisitor(): boolean {
    return this.visitorService.getDisplayFormEditVisitor;
  }
}
