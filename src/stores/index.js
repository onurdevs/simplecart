import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import site from "./site";
const store = configureStore({
  reducer: {
    cart,
    site,
  },
});

export default store;
