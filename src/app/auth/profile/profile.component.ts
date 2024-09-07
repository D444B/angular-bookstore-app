import { Component, Inject } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditing: boolean = false;
  profileForInput!: User;

  hide = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService){}

  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      date: this.data.user.date,
      password: this.data.user.password,
      address: this.data.user.address,
      phone: this.data.user.phone,
      firstName: this.data.user.firstName,
      lastName: this.data.user.lastName,
      favoriteGenres: this.data.user.favoriteGenres,
      carts: this.data.user.carts
    }
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.phone = this.profileForInput.phone;
    this.data.user.firstName = this.profileForInput.firstName;
    this.data.user.lastName = this.profileForInput.lastName;
    this.data.user.favoriteGenres = this.profileForInput.favoriteGenres;

    // console.log(this.data.user);
    // console.log(UserService.dummyUserList);
    this.isEditing = true;
    // console.log(this.isEditing);
  }

}

