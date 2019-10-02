import { Controller, Post, Body, Get } from "@nestjs/common";
import { BooksService } from './books.service'

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  addBook(@Body('title') bookTitle: string, 
          @Body('author') bookAuthor: string
        ){
    const generatedId = this.booksService.pasteBook(
      bookTitle, 
      bookAuthor
      );
    return { id: generatedId };
  }

  @Get()
  getAllBooks(){
      return this.booksService.getBooks();
  }
}