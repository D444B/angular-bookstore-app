import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  book!: Book;
  constructor(public bookService: BookService, private route: ActivatedRoute, private cartService: CartService, private router: Router) {
    // route.params.subscribe((params) => {
    //   if(params['id']) {
    //     this.book = bookService.getBook(params['id']);
    //   }
    // })
  }




ngOnInit(): void {
  this.route.params.subscribe(params => {
    if(params['searchTerm']){
      // this.books = this.bookService.getBooks().filter(book => book.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      let booksByName = this.bookService.getBooks().filter(book => book.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      let booksByGenre = this.bookService.getBooks().filter(book => book.genre.some(s => s === (params['searchTerm'].toLowerCase())));
      let filtered = new Set<Book>([...booksByName, ...booksByGenre]);
      this.books = Array.from(filtered.values());
    } else {
      this.books = this.bookService.getBooks();
    }
  })
  }

  cartAdd(book?: Book) {
    const currentBook = book ? book : this.book;
    this.cartService.add(currentBook);
    this.router.navigateByUrl('/cart-page');
    // console.log(currentBook);
  }
}
