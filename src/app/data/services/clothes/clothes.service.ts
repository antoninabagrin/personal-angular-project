import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { KidsProducts } from '../../../assets/mock/mock-kids-products';
import { ManProducts } from '../../../assets/mock/mock-man-products';
import { WomanProducts } from '../../../assets/mock/mock-woman-products';
import { Product } from '../../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  constructor() {}

  getKidsProducts(): Observable<Product[]> {
    const kidsProducts = of(KidsProducts);
    return kidsProducts;
  }

  getManProducts(): Observable<Product[]> {
    const manProducts = of(ManProducts);
    return manProducts;
  }

  getWomanProducts(): Observable<Product[]> {
    const womanProducts = of(WomanProducts);
    return womanProducts;
  }

  getKidsProduct(id: number | string) {
    return this.getKidsProducts().pipe(
      map(
        (kidsProducts: Product[]) =>
          kidsProducts.find((kidsProducts) => kidsProducts.id === +id)!
      )
    );
  }

  getManProduct(id: number | string) {
    return this.getManProducts().pipe(
      map(
        (manProducts: Product[]) =>
          manProducts.find((manProducts) => manProducts.id === +id)!
      )
    );
  }

  getWomanProduct(id: number | string) {
    return this.getWomanProducts().pipe(
      map(
        (womanProducts: Product[]) =>
          womanProducts.find((womanProducts) => womanProducts.id === +id)!
      )
    );
  }
}
