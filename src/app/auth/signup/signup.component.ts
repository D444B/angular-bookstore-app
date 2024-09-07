import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm){
    if(!this.userService.getUser(form.value.email)) {
        this.errorExists = false;
        // var newUser = this.userService.registerUser( form.value.email, form.value.password, form.value.birthDate);
         var newUser = this.userService.registerUser( form.value.email, form.value.password, form.value.address, form.value.phone, form.value.name, form.value.lastName, form.value.genres);
        this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "The email is already in use."
    }
  }
}
