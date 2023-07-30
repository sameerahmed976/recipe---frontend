import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getUser: (state, action) => {
      // console.log(action);
      return { ...state, user: action.payload, isLoggedIn: true };
    },
    getLogout: (state, action) => {
      // console.log(action);

      return { ...state, user: action.payload, isLoggedIn: false };
    },
  },
});

export default authSlice.reducer;

export const { getLogout, getUser } = authSlice.actions;
