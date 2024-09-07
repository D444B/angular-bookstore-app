import { Injectable } from "@angular/core";
import { Cart } from "../models/Cart";

export interface User {
    id: number;
    email: string;
    password: string;
    date?: Date;
    address?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    favoriteGenres?: string;
    carts: Cart[];

   

}

@Injectable()
export class UserService {

    // currentUser: User = UserService.dummyUserList[0];
    currentUser: User | null;
    constructor() {this.currentUser = null;}

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "user1@gmail.com",
            password: "12345678",
            date: new Date("2023-07-15 18:00"),
            carts: []
        },
        {
            id: 2,
            email: "user2@gmail.com",
            password: "12345678",
            date: new Date("2023-07-15 19:00"),
            carts: []
        }];

    //korisnicko ime / email
    getUserName(user: User): string {
        return user.email;
    }

    //id korisnika
    getUserById(id: number): User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    // //da li je mejl
    // getUser(userEmail: string): User {
    //     this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    //     return this.currentUser;
    // }
// 

    getUser(userEmail: string): User {
        let userFound = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
    //    this.currentUser = userFound;
        return userFound;
    }
    // //da li je lozinka ispravna 
    // isPasswordCorrect(userEmail: string, password: string): boolean {
    //     return UserService.dummyUserList.find(userToFind =>
    //         (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    // }

      //da li je lozinka ispravna 
      isPasswordCorrect(userEmail: string, password: string): boolean {
        if  (UserService.dummyUserList.find(userToFind =>
            (userToFind.email === userEmail && userToFind.password === password))) {
                return true;
            } else {
                return false;
            };
    }


    //registruj korisnika
    // registerUser(email: string, password: string, date: Date): User {
    //     var maxId: number = 0;
    //     UserService.dummyUserList.forEach(user => {
    //         if (maxId < user.id) {
    //             maxId = user.id
    //         }
    //     })
    //     var id = ++maxId;
    //     var user: User = {
    //         id,
    //         email,
    //         password,
    //         date
    //     }
    //     UserService.dummyUserList.push(user);
    //     this.currentUser = user;
    //     console.log(user);
    //     return user;
    // }

    registerUser(email: string, password: string, address: string, phone: string, firstName: string, lastName: string, favoriteGenres: string): User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id
            }
        })
        var id = ++maxId;
        var user: User = {
            id,
            email,
            password,
            address,
            phone,
            firstName,
            lastName,
            favoriteGenres,
            carts: []

        }
        UserService.dummyUserList.push(user);
        this.currentUser = user;
        // console.log(user);
        return user;
    }

    logout() {
    this.currentUser = null;
}

//  hasOrderedBook(user: User, bookId: number){
        
//     }
}

   