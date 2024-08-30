import {configureStore} from "@reduxjs/toolkit";
import visibilityReducer from './slices/visibility.js'
import cartCount from './slices/cartCount.js'
import {fakeStoreApi} from "./API/slices/fakeStoreApi.js";

export const store = configureStore({
    reducer:{
        cartCount: cartCount,
        visibility: visibilityReducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakeStoreApi.middleware),
})