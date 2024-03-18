import { api as index } from "..";

const userApi = index.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<USERS.PostUsersRequest, USERS.PostUsersResponse>({
      query: () => "users",
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
