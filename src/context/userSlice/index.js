import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://18.158.24.26:9050/v1/",
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
    updateUser: builder.mutation({
      query: ({ _id, body }) => ({
        url: `users/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (params) => ({
        url: "auth/login",
        method: "POST",
        params,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
    }),
    verificationUser: builder.mutation({
      query: (params) => ({
        url: "auth/verification",
        method: "POST",
        params,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerificationUserMutation,
} = usersApi;
