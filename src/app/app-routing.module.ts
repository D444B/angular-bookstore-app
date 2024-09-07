import { NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { BookPageComponent } from "./book-page/book-page.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search/:searchTerm', component: HomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'book/:id', component: BookPageComponent},
    { path: 'cart-page', component: CartPageComponent},
    { path: 'checkout', component: CheckoutComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule{}