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
                    }               
                }
            } 
        }),
        dashboard: builder.mutation({
            query(token) {
                return {
                    url: "user/profile",
                    method: "POST",
                    headers: {
                        authorization: "Bearer " + token
                    }
                }
            }
        }),
        profile: builder.mutation({
            query({token, firstName, lastName}) {
                return {
                    url: "user/profile",
                    method: "PUT",
                    headers: {
                        authorization: "Bearer " + token
                    },
                    body: {
                        firstName,
                        lastName
                    }
                }
            }
        })
    })
})

export const {useLoginMutation} = argentBankApi