import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth.js";
import { authApi } from "../services/authService.js";
authApi;
const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
