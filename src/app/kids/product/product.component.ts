import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ClothesService } from 'src/app/clothes.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product$!: Observable<Product>;

  isReadMore = true;

  constructor(
    private clothesService: ClothesService,

    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.clothesService.getProduct(params.get('id')!)
      )
    );
  }

  showText() {
    this.isReadMore = !this.isReadMore;
    if (this.isReadMore === false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
