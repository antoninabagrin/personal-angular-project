import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ClothesItemDetailComponent } from './man/clothes-item-detail/clothes-item-detail.component';
// import { ListOfClothesComponent } from './man/list-of-clothes/list-of-clothes.component';

// import { ManComponent } from './man/man.component';

import { WomanComponent } from './woman/woman.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'woman', component: WomanComponent },
  // {
  //   path: 'man',
  //   component: ListOfClothesComponent,
  //   children: [{ path: ':id', component: ClothesItemDetailComponent }],
  // },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
