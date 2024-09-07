import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../models/CartItem';
import { Cart } from '../models/Cart';
import { UserService } from '../auth/user.service';
import { BookService } from '../services/book/book.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(public cartService: CartService, public userService: UserService, public bookService: BookService) {
    this.setCart();
  }

//   wait: boolean = true;
//   canceled: boolean = false;



//  public waitTimeout() {
//   setTimeout(() => {
//     this.wait = false;
//   }, 10000)
//  }

//  cancel(){
//   this.canceled = true;
//   clearTimeout;
//  }
  

  cart!:Cart;
  
  // remove(cartItem:CartItem){
  //   this.cartService.remove(cartItem.book.id);
  //   this.setCart();
  // }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}
