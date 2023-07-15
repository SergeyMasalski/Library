export namespace CommenApplicationNamespace {
  export interface Book {
    bookId: number;
    name: string;
    authorName: string;
    publishingYear: Date;
    publishersName: string;
    numberOfPages: number;
    numberOfCopies: number;
  }

  export interface Visitor {
    visitorId: number;
    visitorFullName: string;
    visitorPhone: string;
  }

  export interface VisitorCard {
    idCard: number;
    visitorId: number;
    bookId: number;
    tookBook: Date;
    returnBook: Date | null;
  }
}
