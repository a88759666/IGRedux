import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGStory = {
    id: number;
    name: string;
    avatar: string;
}
type IGPost = {
    id: number;
    location: string;
    account: string;
    avatar: string;
    photo: string;
    likes: number;
    description: string;
    hashTags: string;
    createTime: string;
}

export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/"}),
    endpoints: (bulider) => ({
        getIgStories: bulider.query<IGStory[], number | "all">({
            query: (id) => {
                if (id!=="all"){
                    return `stories/${id}`
                }
                return "stories"
            }
        }),
        getIgPosts: bulider.query<IGPost[], number | "all">({
            query: (id) => {
                if (id!=="all"){
                    return `posts/${id}`
                }
                return "posts"
            }
        })
    })
})

export const { useGetIgStoriesQuery, useGetIgPostsQuery } = homeApi
