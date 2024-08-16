import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_MAIN_URL} from "../../url/index.js";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_MAIN_URL
    }),

    endpoints(build) {
        getPosts: build.query({
            query: (arg) => `posts`
        })


    }
});

export const {useGetPostsQuery} = postsAPI