import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartQuantityComponent } from './components/cart-quantity/cart-quantity.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ChatComponent } from './components/chat/chat.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartQuantityComponent, ShortenPipe, ChatComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [CartQuantityComponent, ShortenPipe, ChatComponent],
})
export class SharedModule {}
