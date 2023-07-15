import { Injectable } from '@angular/core';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { BookPageService } from '../book-page/book-page.service';
import { VisitorsPageService } from '../visitors-page/visitors-page.service';
import { HeadersCardsTable } from 'src/app/entities/enums/header-table.enum';
import { CARDS } from 'src/app/entities/mock/cards.mock';

@Injectable()
export class CardPageService {
  private displayNewCardForm: boolean = false;
  private cards: CommenApplicationNamespace.VisitorCard[] = CARDS;
  private idCard: number = Math.max(...this.cards.map((card) => card.idCard));
  private tableData: any[] = this.setCardsTable;

  constructor(
    private booksService: BookPageService,
    private visitorsService: VisitorsPageService
  ) {}

  get getDisplayNewCardForm(): boolean {
    return this.displayNewCardForm;
  }

  get getCards(): CommenApplicationNamespace.VisitorCard[] {
    return this.cards;
  }

  get getHeadersInTable(): string[] {
    return Object.values(HeadersCardsTable);
  }

  get getCardsTable() {
    this.tableData = this.setCardsTable;
    return this.tableData;
  }

  get setCardsTable(): any[] {
    return this.cards.map((item) => {
      const idCard = item.idCard;
      const nameBook = this.booksService.getBook(`${item.bookId}`)?.name;
      const nameVisitor = this.visitorsService.getVisitor(
        `${item.visitorId}`
      )?.visitorFullName;
      const borrowDate = item.tookBook
        .toLocaleString()
        .split(',')
        .slice(0, 1)
        .join('');
      const returnDate = item.returnBook
        ?.toLocaleString()
        .split(',')
        .slice(0, 1)
        .join('');

      if (idCard && nameBook && borrowDate && nameVisitor) {
        return {
          id: idCard,
          name: nameBook,
          nameVisit: nameVisitor,
          borDate: borrowDate,
          retDate: returnDate,
        };
      }
      return {
        id: 0,
        name: 'Error',
        nameVisit: 'Error',
        borDate: 'Error',
        retDate: 'Error',
      };
    });
  }

  public get nextCardId(): number {
    this.idCard++;
    return this.idCard;
  }

  public openFormNewCard(): void {
    this.displayNewCardForm = true;
  }

  public closeFormNewCard(): void {
    this.displayNewCardForm = false;
  }

  public getCard(
    id: string
  ): CommenApplicationNamespace.VisitorCard | undefined {
    return this.cards.find((item) => item.idCard === +id);
  }

  public addCard(card: CommenApplicationNamespace.VisitorCard): void {
    this.cards.push(card);
  }

  public returnBook(id: string): boolean {
    const card = this.getCard(id);
    if (card) {
      card.returnBook = new Date();
      this.booksService.returnBook(`${card.bookId}`);
      return true;
    }
    return false;
  }

  public sortID(): void {
    this.getCardsTable.sort((a, b) => a.id - b.id);
  }

  public sortVisitorsNames(): void {
    this.getCardsTable.sort((a, b) => a.nameVisit.localeCompare(b.nameVisit));
  }

  public sortBookNames(): void {
    this.getCardsTable.sort((a, b) => a.name.localeCompare(b.name));
  }

  public sortBorrowDate(): void {
    this.getCardsTable.sort(
      (a, b) =>
        Date.parse(a.borDate.split('.').reverse().join('-')) -
        Date.parse(b.borDate.split('.').reverse().join('-'))
    );
  }
}