import { Component } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../models/CartItem';
import { BookService } from '../services/book/book.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;
  constructor(public cartService: CartService, public userService: UserService) { 
    this.setCart();
   

  }
    remove(cartItem:CartItem){
      this.cartService.remove(cartItem.book.id);
      this.setCart();
    }
  
    changeQuantity(cartItem:CartItem, quantity:string){
      const q = parseInt(quantity);
      this.cartService.changeQuantity(cartItem.book.id, q);
      this.setCart();
    }
  
    setCart(){
      this.cart = this.cartService.getCart();
    }

    checkout() {
    this.cartService.checkout();
    }
}



