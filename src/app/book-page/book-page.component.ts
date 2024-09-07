import { Component } from '@angular/core';
import { Book } from '../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

book!: Book;

constructor(private activatedRoute: ActivatedRoute, public bookService: BookService, private cartService: CartService, private router: Router) {
activatedRoute.params.subscribe((params) => {
  if(params['id']) {
    this.book = bookService.getBook(params['id']);
  }
})
}

cartAdd() {
  this.cartService.add(this.book);
  this.router.navigateByUrl('/cart-page');
}

}
