import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from "../../../utils/API_CONFIG_BASE.js";

export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => '/products/categories',
        }),
        getProducts: build.query({
            query: () => '/products'
        }),
        getProductsByCategory: build.query({
            query: (category) => `/products/category/${category}`
        })
    }),
});

export const {useGetCategoriesQuery, useLazyGetCategoriesQuery, useLazyGetProductsQuery, useGetProductsQuery, useLazyGetProductsByCategoryQuery} = fakeStoreApi