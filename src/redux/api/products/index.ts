import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      PRODUCTS.GetProductResponse,
      PRODUCTS.GetProductRequest
    >({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    postProducts: builder.mutation<
      PRODUCTS.PostProductRequest,
      PRODUCTS.PostProductResponse
    >({
      query: (products) => ({
        url: "products",
        method: "POST",
        body: products,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getOneProduct: builder.query<
      PRODUCTS.GetProductResponse,
      PRODUCTS.GetProductRequest
    >({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    editProducts: builder.mutation<
      PRODUCTS.EditProductResponse,
      PRODUCTS.EditProductRequest
    >({
      query: ({ _id, newData }) => ({
        url: `products/${_id}`,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,
  useDeleteProductMutation,
  useGetOneProductQuery,
  useEditProductsMutation,
} = api;
