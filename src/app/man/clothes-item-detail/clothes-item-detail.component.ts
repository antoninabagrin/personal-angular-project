// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
// import { ClothesService } from 'src/app/data/services/clothes.service';
// import { Product } from 'src/app/data/models/product';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-clothes-item-detail',
//   templateUrl: './clothes-item-detail.component.html',
//   styleUrls: ['./clothes-item-detail.component.css'],
// })
// export class ClothesItemDetailComponent implements OnInit {
//   product$!: Observable<Product>;
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private clothesService: ClothesService
//   ) {}

//   ngOnInit() {
//     this.product$ = this.route.paramMap.pipe(
//       switchMap((params: ParamMap) =>
//         this.clothesService.getHero(params.get('id')!)
//       )
//     );
//   }
// }
