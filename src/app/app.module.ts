import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { WomanComponent } from './woman/woman.component';
import { ManComponent } from './man/man.component';
import { HomeComponent } from './home/home.component';
// import { ClothesListComponent } from './woman/clothes-list/clothes-list.component';
import { ProductsComponent } from './kids/products/products.component';
import { ClothesService } from './data/services/clothes.service';
import { ListOfClothesComponent } from './man/list-of-clothes/list-of-clothes.component';
import { ClothesItemDetailComponent } from './man/clothes-item-detail/clothes-item-detail.component';
import { KidsModule } from './kids/kids.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeliveryComponent } from './dialog-delivery/dialog-delivery.component';
import { DialogVerificationComponent } from './dialog-verification/dialog-verification.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomanComponent,
    ManComponent,
    HomeComponent,
    // ClothesListComponent,
    ProductsComponent,
    ListOfClothesComponent,
    ClothesItemDetailComponent,
    ShortenPipe,
    DialogDeliveryComponent,
    DialogVerificationComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    KidsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    ScrollingModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  providers: [ClothesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
