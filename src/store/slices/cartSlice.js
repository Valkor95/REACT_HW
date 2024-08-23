import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount += action.payload.price * action.payload.quantity;
        },
        removeItemFromCart: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
            if (existingItemIndex >= 0) {
                const item = state.items[existingItemIndex];
                state.totalAmount -= item.price * item.quantity;
                state.items.splice(existingItemIndex, 1);
            }
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.totalAmount -= existingItem.price * existingItem.quantity;
                existingItem.quantity = quantity;
                state.totalAmount += existingItem.price * quantity;
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;