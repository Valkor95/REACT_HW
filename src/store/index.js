import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice.js';
import cartReducer from './slices/cartSlice';
import { apiSlice } from './API/slices/apiFakeStore.js';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        products: productsSlice,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;