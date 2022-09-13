import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ClothesService } from 'src/app/data/services/clothes.service';
import { Product } from 'src/app/data/models/product';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerificationComponent } from '../dialog-verification/dialog-verification.component';
import { DialogDeliveryComponent } from '../dialog-delivery/dialog-delivery.component';

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
    private route: ActivatedRoute,
    public dialog: MatDialog
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

  openVerificationDialog(): void {
    const dialogRef = this.dialog.open(DialogVerificationComponent, {
      width: '49%',
      height: '100%',

      position: {
        top: '0',
        right: '0',
      },
      enterAnimationDuration: '1s',
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   // console.log('The dialog was closed');

    // });
  }

  openDeliveryDialog(): void {
    const dialogRef = this.dialog.open(DialogDeliveryComponent, {
      width: '40%',
      height: '100%',

      position: {
        top: '0',
        right: '0',
      },
      enterAnimationDuration: '1s',
    });
  }

  addItemToCart(event: any) {
    console.log('addItemToCart');
  }
}
