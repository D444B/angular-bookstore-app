import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { Book } from 'src/app/models/Book';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';


@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  private cart: Cart = new Cart();
  n?: any; // timeout
//  public carts: Cart[] = [];

  add(book: Book, id?: number):void{
      let cartItem = this.cart.items.find(item => item.book.id === book.id);
      if(cartItem){
        this.changeQuantity(book.id, cartItem.quantity + 1);
        this.openSnackBar();
        return;
      }
      this.cart.items.push(new CartItem(book));

      // let notification = new Notification("Book added to cart.")
      // setTimeout(() => {
      //   notification.close();
      // },2000);
      
      this.openSnackBar();
    
  }

  openSnackBar(){
    this._snackBar.open("Book added to cart.", "OK", { duration: 2000});
  }

  remove(bookId: number): void{
    this.cart.items = this.cart.items.filter(item => item.book.id !== bookId);
  }

  changeQuantity(bookId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.book.id === bookId);
    if(!cartItem) {
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  // checkout() {
  //   this.cart.items.forEach(val => this.cart.temp.push(Object.assign({},val)));
  //   this.cart.checkout.concat(this.cart.temp);
  //   this.cart.items.splice(0);
  //   console.log(this.cart.checkout, this.cart.items);
  // }

  // checkout() {
  //   this.cart.checkout.concat(this.cart.items);
  //   this.cart.items.splice(0);
  //   console.log(this.cart.checkout, this.cart.items);
  // }

  // checkout() {
  //   this.cart.checkout = this.cart.items.map((x) => x);
  //   this.cart.items.splice(0);
  //   console.log(this.cart.checkout, this.cart.items);
  // }


  checkout() {
    this.cart.currentTime = new Date();
    this.userService.currentUser?.carts.push(this.cart);
    this.cart = new Cart();
    // console.log(this.cart.items,this.userService.currentUser?.carts, this.cart.currentTime);
    
  }
  

  editCanceledCart(cart: Cart) {
   const index = this.userService.currentUser!.carts.indexOf(cart);
    this.cart = cart;
   if (index > -1) {
    this.userService.currentUser!.carts.splice(index, 1);
   }
   cart.canceled = false;
   cart.wait = false;
   clearTimeout(this.n);
   this.router.navigateByUrl('/cart-page');
   
  }

  removeCart(cart: Cart) {
    const index = this.userService.currentUser!.carts.indexOf(cart);
    this.cart = cart;
   if (index > -1) {
    this.userService.currentUser!.carts.splice(index, 1);
   }
  }

  isDelivered(cart: Cart) {
    return cart.canceled === false && cart.wait === false;
  }
  // wait: boolean = true;
  // canceled: boolean = false;

   

//  public waitTimeout() {
//   this.n = setTimeout(() => {
//     this.cart.wait = false;
//     console.log(this.cart.wait);
//   }, 10000)
//  }

//  cancel(){
//   this.cart.canceled = true;
//   this.cart.wait = false;
//   clearTimeout(this.n);
//   console.log(this.cart.wait,this.cart.canceled );
//  }
  
 public waitTimeout(cart: Cart) {
  cart.wait = true;
  this.n = setTimeout(() => {
    cart.wait = false;
    
    // console.log(cart.wait);
  }, 5000)
 }

 cancel(cart: Cart){
  cart.canceled = true;
  cart.wait = false;
  clearTimeout(this.n);
  
 }


 
}