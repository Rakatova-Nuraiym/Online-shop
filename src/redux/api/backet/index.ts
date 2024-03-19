import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getBacket: builder.query<
      Backet.GetProductResponse,
      Backet.GetProductRequest
    >({
      query: () => ({
        url: "basket",
        method: "GET",
      }),
      providesTags: ["basket"],
    }),
    postBacketProducts: builder.mutation<
      Backet.PostProductRequest,
      Backet.PostProductResponse
    >({
      query: (id) => ({
        url: `basket/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["basket"],
    }),
    buyProduct: builder.mutation({
      query: ({ buyProducts, id }) => ({
        url: `product-buy/${id}`,
        method: "PATCH",
        body: buyProducts,
      }),
      invalidatesTags: ["basket"],
    }),
  }),
});

export const {
  useGetBacketQuery,
  usePostBacketProductsMutation,
  useBuyProductMutation,
} = api;
