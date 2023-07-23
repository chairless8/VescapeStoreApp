// product-details.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product = {
    name: 'Example Product',
    price: 100,
    imageUrl: 'url-to-image',
    description: 'This is a detailed description of the product.'
  };
}
