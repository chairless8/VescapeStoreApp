// shopping-cart-item.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateQuantity, removeFromCart } from '../../actions/cart.actions';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {
  @Input() product!: Product;

  constructor(private store: Store) { }

  increaseQuantity() {
    this.store.dispatch(updateQuantity({ productId: Number(this.product.id), change: 1 }));
  }

  decreaseQuantity() {
    this.store.dispatch(updateQuantity({ productId: Number(this.product.id), change: -1 }));
  }

  removeProduct() {
    this.store.dispatch(removeFromCart({ productId: Number(this.product.id) }));
  }
}
