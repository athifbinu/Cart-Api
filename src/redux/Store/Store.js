import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "../CartSlice/CartSlices";

const store = configureStore({
  reducer: {
    cart: CartSlices,
  },
});

export default store;
