import { CartItem } from "./CartItem";

export enum status {
    delivered = "pristilgo",
    inProgress = "u toku",
    canceled = "otkazano"
}

export class Cart {
    items: CartItem[] = [];
    // checkout: CartItem[] = [];
    // temp: CartItem[] = [];
    currentTime?: Date;
    wait: boolean = true;
    canceled: boolean = false;
    public statusEnum = status;


    get totalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => { 
            totalPrice += item.price; 
        });
        return totalPrice;
    }
}