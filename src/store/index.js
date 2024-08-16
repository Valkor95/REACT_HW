import {configureStore} from "@reduxjs/toolkit";
import {postsAPI} from "./API_Slice/index.js";

export default configureStore({
    reducer: {
        [postsAPI.reducerPath]: postsAPI.reducer
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(postsAPI.middleware)
    }
})