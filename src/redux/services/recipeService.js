import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (data) => ({
    //     url: "users/auth",
    //     method: "POST",
    //     body: data,
    //     credentials: "include",
    //   }),
    // }),
    // logout: builder.mutation({
    //   query: () => ({
    //     url: "users/logout",
    //     method: "POST",
    //     credentials: "include",
    //   }),
    // }),
    // register: builder.mutation({
    //   query: (data) => ({
    //     url: "users",
    //     method: "POST",
    //     body: data,
    //     credentials: "include",
    //   }),
    // }),
    // updateUser: builder.mutation({
    //   query: (data) => ({
    //     url: "users/profile",
    //     method: "PUT",
    //     body: data,
    //     credentials: "include",
    //   }),
    // }),

    getAllRecipes: builder.query({
      query: () => ({
        url: "/allRecipes",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllRecipesQuery } = recipeApi;
