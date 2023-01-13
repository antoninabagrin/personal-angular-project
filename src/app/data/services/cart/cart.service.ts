import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new Subject<number>();
  private cartQuantity: number = 0;

  constructor() {}

  getCartQuantity() {
    return this.cartQuantity;
  }

  incrementCartQuantity() {
    this.cartQuantity = this.cartQuantity + 1;
    this.cart.next(this.cartQuantity);
    console.log('cartQuantityFrom Service', this.cartQuantity);
  }
}
