import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_MAIN_URL} from "../../url/index.js";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_MAIN_URL
    }),

    endpoints: (build) => ({
        getPosts: build.query({
            query: (arg) => `/posts`
        }),
        addPost: build.mutation({
            query:(newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost,
            }),
        }),
        updatePost: build.mutation({
            query: ({id, ...updatedPost}) => ({
                url: `/posts/${id}`,
                method: 'PUT',
                body: updatedPost,
            }),
        }),
        deletePost: build.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DElETE'
            })
        })
    })
});

export const {useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation} = postsAPI

