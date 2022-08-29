import { Component, Input, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { ClothesItem } from '../model/clothesItem';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  favoriteItem: ClothesItem[] = [];
  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    this.clothesService.favoriteItem.subscribe(
      (favoriteItem: ClothesItem[]) => {
        console.log('heyy from Kids Component');
        console.log(favoriteItem);

        this.favoriteItem = favoriteItem;
      }
    );
  }

  // addd(items: ClothesItem[]) {
  //   this.clothesService.favoriteItem.subscribe(() => {
  //     console.log('heyy from Kids Component');
  //   });

  // }
}
