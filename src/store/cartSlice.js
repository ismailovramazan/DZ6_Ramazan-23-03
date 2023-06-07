import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, quantity: 1 });
      }
    }
  }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;