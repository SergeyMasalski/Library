import { Injectable, Optional } from '@angular/core';
import { CommenApplicationNamespace } from 'src/app/entities/interfaces/app.interfaces';
import { BOOKS } from 'src/app/entities/mock/books.mock';
import { HeadersBooksTable } from 'src/app/entities/enums/header-table.enum';

@Injectable()
export class BookPageService {
  private validateNewBook: boolean = false;
  private validateEditForm: boolean = false;
  private books: CommenApplicationNamespace.Book[] =
    localStorage.getItem('books') !== null
      ? JSON.parse(localStorage.getItem('books')!).map(
          (book: CommenApplicationNamespace.Book) => {
            return {
              bookId: book.bookId,
              name: book.name,
              authorName: book.authorName,
              publishingYear: new Date(book.publishingYear),
              publishersName: book.publishersName,
              numberOfPages: +book.numberOfPages,
              numberOfCopies: +book.numberOfCopies,
            };
          }
        )
      : BOOKS;
  private editsBook: CommenApplicationNamespace.Book = {
    bookId: 0,
    name: '',
    authorName: '',
    publishingYear: new Date(),
    publishersName: '',
    numberOfPages: 0,
    numberOfCopies: 0,
  };
  private searchBook: string = '';

  constructor() {}

  get openFormNewBook(): boolean {
    this.validateNewBook = true;
    return this.validateNewBook;
  }

  get closeFormNewBook(): boolean {
    this.validateNewBook = false;
    return this.validateNewBook;
  }

  get showValidate(): boolean {
    return this.validateNewBook;
  }

  get showValidateEditForm(): boolean {
    return this.validateEditForm;
  }

  get getHeadersInTable(): string[] {
    return Object.values(HeadersBooksTable);
  }

  get getBooks(): CommenApplicationNamespace.Book[] {
    return this.books;
  }

  get getSearchBooks(): CommenApplicationNamespace.Book[] {
    return this.books.filter((book) => {
      switch (true) {
        case book.name.includes(this.searchBook):
          return true;
        case book.authorName.includes(this.searchBook):
          return true;
        case book.publishersName.includes(this.searchBook):
          return true;

        default:
          return false;
      }
    });
  }

  get idBookNext(): number {
    return (
      this.getBooks.slice().sort((a, b) => b.bookId - a.bookId)[0].bookId + 1
    );
  }

  get getEditsBook(): CommenApplicationNamespace.Book {
    return this.editsBook;
  }

  get idEditsBook(): number {
    return this.editsBook.bookId;
  }

  get getSearch(): string {
    return this.searchBook;
  }

  set setEditBook(book: CommenApplicationNamespace.Book) {
    this.editsBook = book;
  }

  set setSearch(search: string) {
    this.searchBook = search;
  }

  openFormEditBook(): boolean {
    this.validateEditForm = true;
    return this.validateEditForm;
  }

  closeFormEditBook(): boolean {
    this.validateEditForm = false;
    return this.validateEditForm;
  }

  public getBook(id: string): CommenApplicationNamespace.Book | undefined {
    return this.getBooks.find((item) => item.bookId === +id);
  }

  public addBook(book: CommenApplicationNamespace.Book): void {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  public removeBook(id: string): boolean {
    const book = this.getBooks.find((item) => item.bookId === +id);
    if (book) {
      this.books.splice(
        this.getBooks.findIndex((item) => item === book),
        1
      );
      localStorage.setItem('books', JSON.stringify(this.books));
      return true;
    }
    return false;
  }

  public editBook(id: string, book: CommenApplicationNamespace.Book): boolean {
    const editBook = this.getBooks.find((item) => item.bookId === +id);
    if (editBook) {
      this.editsBook = editBook;

      this.books.splice(
        this.books.findIndex((item) => item === editBook),
        1,
        book
      );
      localStorage.setItem('books', JSON.stringify(this.books));

      return true;
    }
    return false;
  }

  public issueBook(id: string): boolean {
    const book = this.books.find((item) => item.bookId === +id);
    if (book) {
      if (book.numberOfCopies > 0) {
        book.numberOfCopies--;
        localStorage.setItem('books', JSON.stringify(this.books));
        return true;
      }
    }
    return false;
  }

  public returnBook(id: string): boolean {
    const book = this.books.find((item) => item.bookId === +id);
    if (book) {
      book.numberOfCopies++;
      localStorage.setItem('books', JSON.stringify(this.books));
      return true;
    }
    return false;
  }

  public sortBookIds(): void {
    this.books.sort((a, b) => a.bookId - b.bookId);
  }

  public sortBookName(): void {
    this.books.sort((a, b) => a.name.localeCompare(b.name));
  }

  public sortBookAuthor(): void {
    this.books.sort((a, b) => a.authorName.localeCompare(b.authorName));
  }

  public sortBookYear(): void {
    this.books.sort(
      (a, b) => a.publishingYear.getFullYear() - b.publishingYear.getFullYear()
    );
  }

  public sortBookPages(): void {
    this.books.sort((a, b) => a.numberOfPages - b.numberOfPages);
  }

  public sortBookCopies(): void {
    this.books.sort((a, b) => a.numberOfCopies - b.numberOfCopies);
  }

  public startComponent(): void {
    this.books =
      localStorage.getItem('books') !== null
        ? JSON.parse(localStorage.getItem('books')!).map(
            (book: CommenApplicationNamespace.Book) => {
              return {
                bookId: book.bookId,
                name: book.name,
                authorName: book.authorName,
                publishingYear: new Date(book.publishingYear),
                publishersName: book.publishersName,
                numberOfPages: +book.numberOfPages,
                numberOfCopies: +book.numberOfCopies,
              };
            }
          )
        : BOOKS;
  }

  destroyComponent(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
