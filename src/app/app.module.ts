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

import { WomanComponent } from './woman/woman.component';
// import { ManComponent } from './man/man.component';
import { HomeComponent } from './home/home.component';
// import { ClothesListComponent } from './woman/clothes-list/clothes-list.component';;
// import { ListOfClothesComponent } from './man/list-of-clothes/list-of-clothes.component';
// import { ClothesItemDetailComponent } from './man/clothes-item-detail/clothes-item-detail.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { KidsModule } from './features/kids/kids.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomanComponent,
    HomeComponent,
    // ClothesListComponent,
  ],
  imports: [
    BrowserModule,
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
    MatDialogModule,
    SharedModule,
    FlexLayoutModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
