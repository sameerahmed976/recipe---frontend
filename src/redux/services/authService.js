import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
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
    login: builder.mutation({
      query: (data) => ({
        url: "users/auth",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "users/logout",
        method: "POST",
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "users/profile",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    getMe: builder.query({
      query: () => ({
        url: "users/profile",
        method: "GET",
        credentials: "include",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetMeQuery,
  useUpdateUserMutation,
} = authApi;
