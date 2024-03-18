import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["auth"],
    }),

    login: builder.mutation<AUTH.PostFindResponse, AUTH.PostFindRequest>({
      query: (findUser) => ({
        url: "login",
        method: "POST",
        body: findUser,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = api;
