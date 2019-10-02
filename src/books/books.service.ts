import { Injectable } from "@nestjs/common";
import { Book } from './book.model';

@Injectable()
export class BooksService{
  private books: Book[] = [ ];

  pasteBook(title: string, author:string){
    const bookId = Math.random().toString();
    const newBook = new Book(bookId, title, author);
    this.books.push(newBook);
    return bookId;
  }

  getBooks(){
    return [...this.books]; // "..." вытягиваем все елементы из массива books и 
                            //вставляем их как новые элементы в новый массив
  }
}