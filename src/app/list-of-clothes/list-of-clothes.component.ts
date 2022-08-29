import { ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { ClothesItem } from '../model/clothesItem';

@Component({
  selector: 'app-list-of-clothes',
  templateUrl: './list-of-clothes.component.html',
  styleUrls: ['./list-of-clothes.component.css'],
})
export class ListOfClothesComponent implements OnInit {
  @Input() favoriteItem: ClothesItem[] = [];

  // favoriteItem: ClothesItem=[]
  clothes: ClothesItem[] = [];
  cols = 5;
  rowHeight = '550px';
  handsetPortrait = false;
  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothes = this.clothesService.getClothes();
  }

  onSelectFavoriteItem() {
    console.log('heyy from List of Clothes');

    this.clothesService.addToFavorite(this.favoriteItem);
  }
}
