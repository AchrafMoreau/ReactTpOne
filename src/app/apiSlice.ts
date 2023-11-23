import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/user"
    }),
    tagTypes: ['Todos'],
    endpoints: (builder) =>({
        getTodos: builder.query({
            query: ()=> '/todo',
            transformResponse: res => res.sort((val1, val2)=> val2.id - val1.id),
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (newTodo)=>({
                url: "/newTodo",
                method: "POST",
                body: newTodo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: ({ id })=> ({
                url: `deleteTodo/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (data)=> ({
                url: `update/${data.id}`,
                method: "UPDATE",
                body: data
            }),
            invalidatesTags: ['Todos']
        })
    })

})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation
} = apiSlice
