import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/apiFakeStore.js";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
});

export default store;
