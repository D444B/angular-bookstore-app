import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { SearchComponent } from './search/search.component';
import { BookPageComponent } from './book-page/book-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    BookPageComponent,
    CartPageComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
