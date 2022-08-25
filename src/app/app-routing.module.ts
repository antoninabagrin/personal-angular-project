import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { ManComponent } from './man/man.component';
import { ClothesListComponent } from './woman/clothes-list/clothes-list.component';
import { WomanComponent } from './woman/woman.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clothes', component: ClothesListComponent },
  { path: 'woman', component: WomanComponent },
  { path: 'man', component: ManComponent },
  { path: 'kids', component: KidsComponent },
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
