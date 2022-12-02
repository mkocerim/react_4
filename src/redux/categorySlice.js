import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategory: (action) => {
      console.log(">>SET CATEGORY ACTION", action.payload);

      return action.payload;

      //  state = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
