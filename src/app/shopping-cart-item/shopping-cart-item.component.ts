// shopping-cart-item.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  product = {
    name: 'Example Product',
    price: 100,
    imageUrl: 'url-to-image',
    quantity: 1
  };
}
