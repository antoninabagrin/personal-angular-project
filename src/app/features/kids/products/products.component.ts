import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ClothesService } from '../../../data/services/clothes/clothes.service';
import { ClothesItem } from '../../../data/models/clothesItem';
import { Product } from '../../../data/models/product';
import { CartService } from 'src/app/data/services/cart/cart.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.pageYoffset = window.pageYOffset;
  }
  kidsProducts: Product[] = [];

  constructor(
    private clothesService: ClothesService,
    private cartService: CartService,
    private scroll: ViewportScroller
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.clothesService
      .getKidsProducts()
      .subscribe((kidsProducts) => (this.kidsProducts = kidsProducts));
  }

  incrementCartQuantity() {
    this.cartService.incrementCartQuantity();
    console.log('addItemToCart from products');
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  ngOnDestroy(): void {
    // this.isChangedSub.unsubscribe();
  }
}
