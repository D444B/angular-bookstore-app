import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';
import { User } from 'src/app/auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {




  constructor() { }

  getBook(id: number): Book {
    return this.getBooks().find(book => book.id == id)!;
  }

  rate(book: Book, user: User, rating: number) {
    book.userRatings.set(user, rating);
   
  }

  averageRating (book: Book) {

    if (book.userRatings.size === 0) {
      return 0;
    } 
    let avgRating = 0;
    for (let rating of book.userRatings.values()){
      avgRating += rating;
    } 
    avgRating /= book.userRatings.size;
    
    return avgRating;
  }

  static bookList: Book[] = [
    {
      id: 1,
      name: "Color Theory",
      genre: ['art', 'color', 'how-to'],
      pages: 160,
      publisher: "Publisher 4",
      date: new Date("1993-01-01"),
      price: 40,
      review: ['Really artsy, however it is expensive'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 2,
      name: "Harry Potter and the Sorcerer's Stone",
      genre: ['fantasy', 'fiction','magic'],
      pages: 223,
      publisher: "Publisher 1",
      date: new Date("1997-06-26"),
      price: 30,
      review: ['Very good book', 'Peak fantasy'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 3,
      name: "Harry Potter and the Chamber of Secrets",
      genre: ['fantasy', 'fiction','magic'],
      pages: 251,
      publisher: "Publisher 1",
      date: new Date("1998-06-02"),
      price: 30,
      review: ['Best sequel ever', 'Dobra knjiga'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 4,
      name: "Harry Potter and the Prisoner of Azkaban",
      genre: ['fantasy', 'fiction','magic'],
      pages: 317,
      publisher: "Publisher 1",
      date: new Date("1999-07-08"),
      price: 30,
      review: ['I dislike this one'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 5,
      name: "Harry Potter and the Goblet of Fire",
      genre: ['fantasy', 'fiction','magic'],
      pages: 636,
      publisher: "Publisher 1",
      date: new Date("2000-06-08"),
      price: 30,
      review: [''],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 6,
      name: "Harry Potter and the Order of Phoenix",
      genre: ['fantasy', 'fiction','magic'],
      pages: 766,
      publisher: "Publisher 1",
      date: new Date("2003-06-21"),
      price: 30,
      review: ['The movie was better', 'Good book'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 7,
      name: "Harry Potter and the Half-blood Prince",
      genre: ['fantasy', 'fiction','magic'],
      pages: 607,
      publisher: "Publisher 1",
      date: new Date("2005-06-16"),
      price: 30,
      review: [''],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 8,
      name: "Harry Potter and the Deathly Hallows",
      genre: ['fantasy', 'fiction','magic'],
      pages: 607,
      publisher: "Publisher 1",
      date: new Date("2007-06-21"),
      price: 30,
      review: [''],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 9,
      name: "The Fellowship of the Ring",
      genre: ['fantasy', 'fiction','magic','adventure'],
      pages: 423,
      publisher: "Publisher 2",
      date: new Date("1954-07-29"),
      price: 25,
      review: ['Dobra trilogija'],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 10,
      name: "The Two Towers",
      genre: ['fantasy', 'fiction','magic','adventure'],
      pages: 352,
      publisher: "Publisher 2",
      date: new Date("1954-11-11"),
      price: 25,
      review: [''],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 11,
      name: "The Return of the King",
      genre: ['fantasy', 'fiction','magic','adventure'],
      pages: 416,
      publisher: "Publisher 2",
      date: new Date("1955-10-20"),
      price: 25,
      review: [''],
      rating: 0,
      status: "",
      image: '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    },
    {
      id: 12,
      name: "The Ultimate Hitchhiker's Guide to the Galaxy",
      genre: ['science fiction', 'adventure', 'comedy'],
      pages: 224,
      publisher: "Publisher 2",
      date: new Date("1979-10-12"),
      price: 20,
      review: [''],
      rating: 0,
      status: "",
      image:  '/assets/images/books/placeholder1.png',
      userRatings: new Map<User, number>()
    }
  ]

getBooks():Book[] {
  return BookService.bookList;
}


}
