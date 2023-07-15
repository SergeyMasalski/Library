import { CommenApplicationNamespace } from '../interfaces/app.interfaces';

export const CARDS: CommenApplicationNamespace.VisitorCard[] = [
  {
    idCard: 1,
    visitorId: 1,
    bookId: 1,
    tookBook: new Date('2023-07-07'),
    returnBook: null,
  },
  {
    idCard: 2,
    visitorId: 2,
    bookId: 3,
    tookBook: new Date('2023-07-09'),
    returnBook: null,
  },
  {
    idCard: 3,
    visitorId: 3,
    bookId: 5,
    tookBook: new Date('2023-07-11'),
    returnBook: null,
  },
  {
    idCard: 4,
    visitorId: 4,
    bookId: 4,
    tookBook: new Date('2023-07-12'),
    returnBook: null,
  },
  {
    idCard: 5,
    visitorId: 5,
    bookId: 1,
    tookBook: new Date('2023-07-13'),
    returnBook: null,
  },
];
