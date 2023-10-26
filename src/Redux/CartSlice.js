import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingCard = state.find((item) => item.id === newItem.id);
      console.log("this is from add to cart");
      if (existingCard) {
        existingCard.quantity += 1;
        existingCard.totalPrice = existingCard.quantity * existingCard.price;
      } else {
        newItem.quantity = 1;
        newItem.totalPrice = newItem.price;
        state.push(newItem);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increase(state, action) {
      console.log("Hit increase");
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          item.totalPrice = item.quantity * item.price;
        }
        console.log(state);
      });
    },
    decrease(state, action) {
      console.log("HIt decrease");
      state.forEach((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = item.quantity * item.price;
        }
      });
    },
  },
});

export const { add, remove, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
