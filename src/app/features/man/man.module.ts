import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '../../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ManRoutingModule,
    FlexLayoutModule,
    ScrollingModule,
    MatCardModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class ManModule {}
