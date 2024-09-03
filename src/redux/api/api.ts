import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "",
                method: "GET"
            })
        })
    })
});

export const { useGetUsersQuery } = baseApi;
