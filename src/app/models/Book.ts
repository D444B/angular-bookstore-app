import { User } from "../auth/user.service";

export class Book {
    id!: number;
    name!: string;
    genre!: string[];
    pages!: number;
    publisher!: string;
    date!: Date;
    price!: number;
    review?: string[];
    rating?: number;
    status?: string;
    image?: string;
    userRatings = new Map<User, number>();
    
    constructor() {
        
    }

  
}