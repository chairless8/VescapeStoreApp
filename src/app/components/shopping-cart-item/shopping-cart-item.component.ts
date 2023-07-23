// shopping-cart-item.component.ts
import { Component, Input } from '@angular/core';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  @Input() product!: Product;
}
