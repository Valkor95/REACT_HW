import {configureStore} from "@reduxjs/toolkit";
import contactReducer from './slices/contact'

const store = configureStore({
    reducer: {
        contact: contactReducer,
    }
})

export default store;