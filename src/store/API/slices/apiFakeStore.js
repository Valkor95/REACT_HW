import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getCategories: builder.query({
            query: () => '/products/categories',
        }),
        getCategoryProducts: builder.query({
            query: (category) => `/products/category/${category}`,
        }),
    }),
});

export const {
    d,
    useGetProductQuery,
    useGetCategoriesQuery,
    useGetCategoryProductsQuery,
} = apiSlice;