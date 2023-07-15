import { Component } from '@angular/core';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';

@Component({
  selector: 'table-of-visitors',
  templateUrl: './table-of-visitors.component.html',
  styleUrls: ['./table-of-visitors.component.scss'],
})
export class TableOfVisitorsComponent {
  constructor(private visitorService: VisitorsPageService) {}

  get tableHeaders(): string[] {
    return this.visitorService.getHeadersInTable;
  }

  get tableData(): CommenApplicationNamespace.Visitor[] {
    return this.visitorService.getVisitors;
  }
}
