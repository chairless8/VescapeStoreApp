// src/app/selectors/cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<State>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: State) => state.cart
);
