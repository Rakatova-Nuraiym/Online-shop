import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getfavorite: builder.query<
      Favorite.GetProductResponse,
      Favorite.GetProductRequest
    >({
      query: () => ({
        url: "favorites-products",
        method: "GET",
      }),
      providesTags: ["favorite"],
    }),

    postFavoriteProducts: builder.mutation<
      Favorite.PostProductResponse,
      Favorite.PostProductRequest
    >({
      query: (id) => ({
        url: `favorites-products/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["favorite"],
    }),
  }),
});

export const { useGetfavoriteQuery, usePostFavoriteProductsMutation } = api;
