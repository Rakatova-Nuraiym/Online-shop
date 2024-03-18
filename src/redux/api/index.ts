import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_URL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  },
});

const baseQueruExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);
  return response;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueruExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["users", "favorite", "basket", "products", "auth"],
  endpoints: () => ({}),
});
