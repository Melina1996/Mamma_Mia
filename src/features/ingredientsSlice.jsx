import { createSlice } from "@reduxjs/toolkit";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    value: "",
  },
  reducers: {
    chose: (state, action) => {
        state.value = action.payload;
  }},
});

export const { chose } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;