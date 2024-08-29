import { createSlice } from '@reduxjs/toolkit';

const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: {
        isVisible: false,
    },
    reducers: {
        toggleVisibility: (state) => {
            state.isVisible = !state.isVisible;
        },
        setVisibility: (state, action) => {
            state.isVisible = action.payload;
        },
    },
});

export const { toggleVisibility, setVisibility } = visibilitySlice.actions;

export default visibilitySlice.reducer;
