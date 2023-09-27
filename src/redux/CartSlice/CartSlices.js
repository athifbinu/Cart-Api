import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice =
          Number(existingItem?.totalQuantity?.totalprice) +
          Number(newItem?.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (totel, item) => totel + Number(item.price) * Number(item.quantity),
        0
      );
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalprice =
          Number(existingItem.totalprice) + Number(existingItem.price);

        state.totalQuantity++;
        state.totalAmount += Number(existingItem.price);
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalprice =
          Number(existingItem.totalprice) - Number(existingItem.price);

        state.totalQuantity--;
        state.totalAmount -= Number(existingItem.price);
      }
    },

    

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);

        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (totel, item) => totel + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
