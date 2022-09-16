import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/data/models/product';
import { CartService } from 'src/app/data/services/cart.service';
import { ClothesService } from 'src/app/data/services/clothes.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  womanProduct$!: Observable<Product>;

  isReadMore = true;

  constructor(
    private clothesService: ClothesService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.womanProduct$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.clothesService.getWomanProduct(params.get('id')!)
        // getProduct(params.get('id')!)
      )
    );
  }

  showText() {
    this.isReadMore = !this.isReadMore;
    if (this.isReadMore === false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  incrementCartQuantity() {
    this.cartService.incrementCartQuantity();
  }
}
