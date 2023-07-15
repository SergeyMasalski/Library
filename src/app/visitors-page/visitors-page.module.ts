import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsPageComponent } from './visitors-page.component';
import { SharedModule } from '../shared/shared.module';
import { TableOfVisitorsComponent } from './table-of-visitors/table-of-visitors.component';
import { NewVisitorFormComponent } from './new-visitor-form/new-visitor-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditVisitorFormComponent } from './edit-visitor-form/edit-visitor-form.component';
import { SortSearchComponentVisitors } from './sort-search/sort-search.component';

@NgModule({
  declarations: [
    VisitorsPageComponent,
    TableOfVisitorsComponent,
    NewVisitorFormComponent,
    EditVisitorFormComponent,
    SortSearchComponentVisitors,
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [VisitorsPageComponent],
  providers: [],
})
export class VisitorsPageModule {}
