// import { Component, OnInit } from '@angular/core';
// import { ClothesService } from '../../data/services/clothes.service';
// import { Product } from 'src/app/data/models/product';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { ClothesItem } from 'src/app/data/models/clothesItem';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-list-of-clothes',
//   templateUrl: './list-of-clothes.component.html',
//   styleUrls: ['./list-of-clothes.component.css'],
// })
// export class ListOfClothesComponent implements OnInit {
//   products$!: Observable<Product[]>;
//   selectedId = 0;
//   cols = 5;
//   rowHeight = '550px';
//   handsetPortrait = false;
//   constructor(
//     private clothesService: ClothesService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     this.products$ = this.route.paramMap.pipe(
//       switchMap((params) => {
//         this.selectedId = parseInt(params.get('id')!, 10);
//         return this.clothesService.getClothes();
//       })
//     );
//   }
// }
// // getItem(data: any) {
// //   console.log(data, 'datta from getItem');

// //   this.clothesService.addtoFavorite(data);
// // }
// // }
