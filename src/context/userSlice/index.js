import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://market.ilyosbekdev.uz/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "users/search",
        params,
      }),
      providesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: (userId) => ({
        url: `users/${userId}`,
      }),
      providesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
} = usersApi;
