import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/app/data/models/product';
import { CartService } from 'src/app/data/services/cart.service';
import { ClothesService } from 'src/app/data/services/clothes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }

  womanProducts: Product[] = [];

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService,
    private scroll: ViewportScroller
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.clothesService.getWomanProducts().subscribe((womanProducts) => {
      this.womanProducts = womanProducts;
    });
  }

  incrementCartQuantity() {
    this.cartService.incrementCartQuantity();
    console.log('addItemToCart from womanProducts');
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
