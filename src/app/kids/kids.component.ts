import { Component, Input, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { ClothesItem } from '../model/clothesItem';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  favoriteItem: ClothesItem[] = [
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/4799/036/123/2/w/387/4799036123_2_1_1.jpg?ts=1655898815835',
      price: 45.99,
    },
  ];
  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    // this.clothesService.statusUpdated.subscribe(
    //   (favoriteItem: ClothesItem[]) => {
    //     console.log(favoriteItem, 'from kids');
    //     this.favoriteItem = favoriteItem;
    //   }
    // );
    this.favoriteItem = this.clothesService.getFavoriteItems();
  }
}
