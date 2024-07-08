import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { argentBankApi } from "../service/api.js"

export const dashboardThunk = createAsyncThunk(
    "dashboard/dashboardThunk",
    async ({token}, thunkAPI) => {
        // const response = await thunkAPI.dispatch(useLoginMutation(email, password))
        const data = await thunkAPI.dispatch(argentBankApi.endpoints.dashboard.initiate(token))
        return data
    }
)
// TODO : error 400 (bad token)
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: "",
    extraReducers: (builder) => {
       builder.addCase(dashboardThunk.fulfilled, (state, action) => {
        state = action.payload?.data?.body || ""
        return state
       })
    }
})

export default dashboardSlice.reducer