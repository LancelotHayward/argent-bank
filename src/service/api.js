import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const argentBankApi = createApi({
    reducerPath: "argentBankApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "localhost:3001/"
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query(email, password) {
                console.log("boop")
                return {
                    url: "user/login",
                    method: "POST",
                    body: {
                        email,
                        password
                    }                   
                }
            } 
        })
    })
})

export const {useLoginMutation} = argentBankApi