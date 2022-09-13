import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClothesService } from '../../../data/services/clothes.service';
import { ClothesItem } from '../../../data/models/clothesItem';
import { Product } from '../../../data/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  // private isChangedSub: Subscription;
  products: Product[] = [];

  favoriteItem: ClothesItem[] = [
    {
      id: 1,
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/4799/036/123/2/w/387/4799036123_2_1_1.jpg?ts=1655898815835',
      price: 45.99,
    },
  ];
  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    this.getProducts();
    // this.clothesService.statusUpdated.subscribe(
    //   (favoriteItem: ClothesItem[]) => {
    //     console.log(favoriteItem, 'from kids');
    //     this.favoriteItem = favoriteItem;
    //   }
    // );
    // this.favoriteItem = this.clothesService.getFavoriteItems();
    // this.isChangedSub = this.clothesService.favoriteItemChanged.subscribe(
    //   (item: ClothesItem[]) => {
    //     this.favoriteItem = item;
    //   }
    // );
  }
  getProducts() {
    this.clothesService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  show() {
    console.log('show');
  }

  ngOnDestroy(): void {
    // this.isChangedSub.unsubscribe();
  }
}
