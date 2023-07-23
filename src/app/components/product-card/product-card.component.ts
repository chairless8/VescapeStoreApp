// product-card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = {
    name: 'Example Product',
    price: 100,
    imageUrl: 'url-to-image'
  };
}
