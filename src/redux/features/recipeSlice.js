import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
};

const recipeSlice = createSlice({
  name: "recipeSlice",
  initialState,
  reducers: {
    setId: (state, action) => {
      // console.log(action);
      return { ...state, user: action.payload, isLoggedIn: true };
    },
  },
});

export default recipeSlice.reducer;

export const { setId } = recipeSlice.actions;
