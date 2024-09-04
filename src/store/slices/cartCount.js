import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartCount');
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cartCount', JSON.stringify(cart));
};

const cartCount = createSlice({
    name: 'cartCount',
    initialState: {
       items: loadCartFromLocalStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                // Добавляем новый товар в корзину
                state.items.push({ id: action.payload.id, quantity: 1 });
            } else {
                // Увеличиваем количество существующего товара
                state.items[itemIndex].quantity += 1;
            }
            saveCartToLocalStorage(state.items)
        },
        incrementQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += 1;
            }
            saveCartToLocalStorage(state.items);
        },
        decrementQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
            } else if (itemIndex !== -1 && state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
});

export const { addToCart, incrementQuantity, decrementQuantity , removeFromCart, clearCart} = cartCount.actions;

export default cartCount.reducer;
