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
    }),
});

export const {useGetCategoriesQuery, useLazyGetCategoriesQuery} = fakeStoreApi