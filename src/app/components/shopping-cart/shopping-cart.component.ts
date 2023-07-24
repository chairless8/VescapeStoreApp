// shopping-cart.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../../interfaces/product';
import { selectCartItems } from '../../selectors/cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cartItems$: Observable<Product[]>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  getTotal(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + (item.price * (item.quantity ?? 0)), 0))
    );
  }
}
