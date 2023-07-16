import { Injectable } from '@angular/core';
import { HeadersVisitorsTable } from 'src/app/entities/enums/header-table.enum';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { VISITORS } from 'src/app/entities/mock/visitors.mock';

@Injectable()
export class VisitorsPageService {
  private visitors = VISITORS;
  private displayFormNewVisitor: boolean = false;
  private displayFormEditVisitor: boolean = false;
  private currentEditVisitor: CommenApplicationNamespace.Visitor = {
    visitorId: 0,
    visitorFullName: '',
    visitorPhone: '',
  };
  private searchVisitors: string = '';

  get getVisitors(): CommenApplicationNamespace.Visitor[] {
    return this.visitors;
  }

  get getSearchVisitors(): CommenApplicationNamespace.Visitor[] {
    return this.visitors.filter((visitor) => {
      if (visitor.visitorFullName.includes(this.searchVisitors)) return true;
      if (visitor.visitorPhone.includes(this.searchVisitors)) return true;

      return false;
    });
  }

  get getHeadersInTable(): string[] {
    return Object.values(HeadersVisitorsTable);
  }

  get getDisplayFormNewVisitor(): boolean {
    return this.displayFormNewVisitor;
  }

  get getDisplayFormEditVisitor(): boolean {
    return this.displayFormEditVisitor;
  }

  get idNewVisitor(): number {
    const sortArray = this.visitors.slice();
    return (
      +sortArray.sort((a, b) => b.visitorId - a.visitorId)[0].visitorId + 1
    );
  }

  get editVisitorId(): number {
    return this.currentEditVisitor.visitorId;
  }

  get editVisitorInForm(): CommenApplicationNamespace.Visitor {
    return this.currentEditVisitor;
  }

  get getSearchVisitor(): string {
    return this.searchVisitors;
  }

  set setSearchVisitors(search: string) {
    this.searchVisitors = search;
  }

  public openFormNewVisitor(): void {
    this.displayFormNewVisitor = true;
  }

  public closeFormNewVisitor(): void {
    this.displayFormNewVisitor = false;
  }

  public openFormEditVisitor(): void {
    this.displayFormEditVisitor = true;
  }

  public closeFormEditVisitor(): void {
    this.displayFormEditVisitor = false;
  }

  public setEditVisitor(id: string): void {
    const visitorId = +id;
    const editVisitor = this.getVisitors.find(
      (item) => item.visitorId === visitorId
    );

    if (editVisitor) this.currentEditVisitor = editVisitor;
  }

  public getVisitor(
    id: string
  ): CommenApplicationNamespace.Visitor | undefined {
    return this.visitors.find((item) => item.visitorId === +id);
  }

  public addVisitor(vistor: CommenApplicationNamespace.Visitor): void {
    this.visitors.push(vistor);
  }

  public removeVisitor(id: string): void {
    const removeVisitor = this.getVisitors.find(
      (item) => item.visitorId === +id
    );
    if (removeVisitor) {
      this.currentEditVisitor = removeVisitor;

      this.visitors.splice(
        this.visitors.findIndex(
          (item) => item.visitorId === removeVisitor.visitorId
        ),
        1
      );
    }
  }

  public editVisitor(
    id: string,
    visitor: CommenApplicationNamespace.Visitor
  ): void {
    const editVisitor = this.getVisitors.find((item) => item.visitorId === +id);
    if (editVisitor) {
      this.currentEditVisitor = editVisitor;

      this.visitors.splice(
        this.visitors.findIndex(
          (item) => item.visitorId === editVisitor.visitorId
        ),
        1,
        visitor
      );
    }
  }

  public sortVisitorsIds(): void {
    this.visitors.sort((a, b) => a.visitorId - b.visitorId);
  }

  public sortVisitorsNames(): void {
    this.visitors.sort((a, b) =>
      a.visitorFullName.localeCompare(b.visitorFullName)
    );
  }
}
