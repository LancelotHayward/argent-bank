import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useLoginMutation, argentBankApi } from "../../service/api.js"

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (email, password, thunkAPI) => {
        console.log(useLoginMutation)
        console.log(argentBankApi.endpoints.login)
        const response = await useLoginMutation(email, password)
        return response.data
    }
)
// TODO : error 400 or 500 (bad password)
const loginSlice = createSlice({
    name: "login",
    initialState: "",
    extraReducers: (builder) => {
       builder.addCase(loginThunk.fulfilled, (state, action) => {
        state = action.payload?.token || ""
        return state
       })
    }
})

export const {tempReducer} = loginSlice.actions
export default loginSlice.reducer