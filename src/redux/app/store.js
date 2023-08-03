import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth.js";
import { authApi } from "../services/authService.js";
import { recipeApi } from "../services/recipeService.js";
import recipeSlice from "../features/recipeSlice.js";
authApi;

const store = configureStore({
  reducer: {
    auth: authSlice,
    recipe: recipeSlice,
    [authApi.reducerPath]: authApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, recipeApi.middleware),
});

export default store;
