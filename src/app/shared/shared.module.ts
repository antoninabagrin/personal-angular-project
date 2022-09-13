import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartQuantityComponent } from './components/cart-quantity/cart-quantity.component';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [CartQuantityComponent, ShortenPipe],
  imports: [CommonModule],
  exports: [CartQuantityComponent, ShortenPipe],
})
export class SharedModule {}
