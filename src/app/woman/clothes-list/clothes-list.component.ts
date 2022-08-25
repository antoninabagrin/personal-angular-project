import { Component, OnInit } from '@angular/core';

import { ClothesItem } from 'src/app/model/clothesItem';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css'],
})
export class ClothesListComponent implements OnInit {
  cols = 4;
  rowHeight = '500px';
  handsetPortrait = false;

  clothesItem: ClothesItem[] = [
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/8746/597/630/2/w/469/8746597630_1_1_1.jpg?ts=1660914345731',
      price: 25.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/V/0/1/p/2907/062/612/2/w/438/2907062612_1_1_1.jpg?ts=1646918235130',
      price: 59.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/V/0/1/p/9878/076/420/2/w/438/9878076420_1_1_1.jpg?ts=1644569441329',
      price: 24.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/4661/116/700/2/w/1126/4661116700_1_1_1.jpg?ts=1661158489099',
      price: 29.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/5802/125/640/2/w/670/5802125640_1_1_1.jpg?ts=1660912494708',
      price: 98.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/5802/125/540/2/w/670/5802125540_2_1_1.jpg?ts=1660912494133',
      price: 54.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/V/0/1/p/4437/091/500/2/w/438/4437091500_1_1_1.jpg?ts=1649322063429',
      price: 25.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/3067/142/687/2/w/908/3067142687_2_3_1.jpg?ts=1660149022361',
      price: 67.99,
    },
    {
      imageUrl:
        'https://static.zara.net/photos///2022/I/0/1/p/3159/636/800/12/w/670/3159636800_2_1_1.jpg?ts=1656488231365',
      price: 24.99,
    },
  ];
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe([
        Breakpoints.Tablet,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        this.cols = 4;
        this.rowHeight = '500px';
        this.handsetPortrait = false;

        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1;
          this.rowHeight = '430px';
          this.handsetPortrait = true;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2;
        }
      });
  }
}
