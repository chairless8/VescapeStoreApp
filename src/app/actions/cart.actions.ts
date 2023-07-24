// src/app/actions/cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from '../interfaces/product';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const updateQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ productId: number, change: number }>()
);
