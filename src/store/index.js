import {configureStore} from "@reduxjs/toolkit";
import visibilityReducer from './slices/visibility.js'
import categorySlice from './slices/category.js'
import {fakeStoreApi} from "./API/slices/fakeStoreApi.js";

export const store = configureStore({
    reducer:{
        visibility: visibilityReducer,
        category: categorySlice,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakeStoreApi.middleware),
})