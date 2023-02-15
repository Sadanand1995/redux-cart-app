import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCartReducer: (state, action) => {
      const { data } = action.payload;
      const isItemExist = state.cartItems.find((e) => e.id === data.id);
    },
  }
);

export const { addToCartReducer } = cartReducer.action;
