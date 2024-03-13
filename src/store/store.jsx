import { configureStore } from "@reduxjs/toolkit";
//need to import my reducer
import ingredientsReducer from "../features/ingredientsSlice"
import basketReducer from "../features/basketSlice"


const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    basket: basketReducer,
  },
});

export default store;