import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      //only if product does not exist yet on my array, I add it
      if (!state.value.some((item) => item.name === action.payload.name)) {
        state.value.push(action.payload);
      } else {
        state.value;
      }

      //I get index of my product
      const index = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );

      //I apply index to change quantity of my product
      state.value[index].quantity += 1;
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    removeOneItem: (state, action) => {
      //I get index of my product
      const index = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );

      //I apply index to change quantity of my product
      if (state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value.splice(index, 1);
      }
    },
    total: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { add, remove, removeOneItem, total } = basketSlice.actions;

export default basketSlice.reducer;
