import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Ürün sepette zaten varsa adedini arttır
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        // Ürün sepette yoksa yeni ürün ekle
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        existingProduct.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cart.actions;

export default cart.reducer;
