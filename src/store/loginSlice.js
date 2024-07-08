import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useLoginMutation, argentBankApi } from "../service/api.js"

export const loginThunk = createAsyncThunk(
    "login/loginThunk",
    async ({email, password}, thunkAPI) => {
        // const response = await thunkAPI.dispatch(useLoginMutation(email, password))
        const data = await thunkAPI.dispatch(argentBankApi.endpoints.login.initiate({email, password}))
        return data
    }
)
// TODO : error 400 or 500 (bad password)
const loginSlice = createSlice({
    name: "login",
    initialState: "",
    extraReducers: (builder) => {
       builder.addCase(loginThunk.fulfilled, (state, action) => {
        state = action.payload?.data?.body?.token || ""
        return state
       })
    }
})

export default loginSlice.reducer