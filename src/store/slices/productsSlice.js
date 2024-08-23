import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../API/slices/apiFakeStore.js';

const initialState = {
    products: [],
    filteredProducts: [],
    status: 'idle',
    error: null,
    filters: {
        category: '',
        priceRange: [0, 1000],
        searchQuery: '',
    },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        filterProducts: (state) => {
            const { category, priceRange, searchQuery } = state.filters;
            state.filteredProducts = state.products.filter(product => {
                const matchesCategory = category ? product.category === category : true;
                const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
                const matchesSearch = searchQuery ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
                return matchesCategory && matchesPrice && matchesSearch;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(apiSlice.endpoints.getProducts.matchFulfilled, (state, action) => {
                state.products = action.payload;
                state.filteredProducts = action.payload;
                state.status = 'succeeded';
            })
            .addMatcher(apiSlice.endpoints.getProducts.matchPending, (state) => {
                state.status = 'loading';
            })
            .addMatcher(apiSlice.endpoints.getProducts.matchRejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setFilters, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;

