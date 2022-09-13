import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsRoutingModule } from './kids-routing.module';
import { ProductComponent } from './product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductsComponent } from './products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogDeliveryComponent } from './dialog-delivery/dialog-delivery.component';
import { DialogVerificationComponent } from './dialog-verification/dialog-verification.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    DialogDeliveryComponent,
    DialogVerificationComponent,
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    SharedModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonToggleModule,
    DataModule,
    ScrollingModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  exports: [],
})
export class KidsModule {}
