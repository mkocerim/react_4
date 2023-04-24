import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      console.log(">>SET CATEGORY ACTION", action.payload);

      //state.categories = action.payload

      return action.payload;

      //state = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
