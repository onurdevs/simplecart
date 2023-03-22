import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
  name: "site",
  initialState: {
    cartShow: true,
  },
  reducers: {
    setCartShow: (state, action) => {
      state.cartShow = action.payload;
    },
  },
});

export const { setCartShow } = site.actions;
export default site.reducer;
