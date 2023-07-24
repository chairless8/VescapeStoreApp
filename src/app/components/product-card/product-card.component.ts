// product-card.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../../actions/cart.actions';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private store: Store) { }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }
}
