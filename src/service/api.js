import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const argentBankApi = createApi({
    reducerPath: "argentBankApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1/"
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query({email, password}) {
                return {
                    url: "user/login",
                    method: "POST",
                    body: {
                        email,
                        password
                    },                  
                }
            } 
        })
    })
})

export const {useLoginMutation} = argentBankApi