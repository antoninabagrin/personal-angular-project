import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../data/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartQuantity!: number;
  private carQuantitySub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.carQuantitySub = this.cartService.cart.subscribe(() => {
      this.cartQuantity = this.cartService.getCartQuantity();
    });

    console.log(this.cartQuantity, 'from header');
  }

  ngOnDestroy(): void {
    this.carQuantitySub.unsubscribe();
  }
}
