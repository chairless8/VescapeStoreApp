// src/app/reducers/cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, updateQuantity } from '../actions/cart.actions';
import { Product } from '../interfaces/product';

export interface State {
  cart: Product[];
}

export const initialState: State = {
  cart: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const productExists = state.cart.some(item => item.id === product.id);
    if (productExists) {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item)
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }]
      };
    }
  }),
  on(removeFromCart, (state, { productId }) => ({ ...state, cart: state.cart.filter(item => Number(item.id) !== productId) })),
  on(updateQuantity, (state, { productId, change }) => ({
    ...state,
    cart: state.cart.map(item => Number(item.id) === productId ? { ...item, quantity: (item.quantity ?? 0) + change } : item)
  })),
);


