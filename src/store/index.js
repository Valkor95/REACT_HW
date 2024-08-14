import {configureStore} from "@reduxjs/toolkit";
import contactReducer from './slices/contact'

const store = configureStore({
    reducer: {
        contacts: contactReducer,
    }
})

export default store;