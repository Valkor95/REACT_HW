// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './API/slices/apiFakeStore.js';

export const store = configureStore({
    reducer: {
        // Добавьте редуктор apiSlice в Redux Store
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    // Добавьте middleware apiSlice в Redux Store
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
