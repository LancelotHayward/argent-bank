import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { argentBankApi } from "../service/api.js"
import { revertAll } from "./revertAll.js"
import { updateToken } from "./updateToken.js"

export const loginThunk = createAsyncThunk(
    "login/loginThunk",
    async ({email, password}, thunkAPI) => {
        // const response = await thunkAPI.dispatch(useLoginMutation(email, password))
        const data = await thunkAPI.dispatch(argentBankApi.endpoints.login.initiate({email, password}))
        return data
    }
)
const loginSlice = createSlice({
    name: "login",
    initialState: "",
    extraReducers: (builder) => {
       builder
        .addCase(loginThunk.fulfilled, (state, action) => {
            state = action.payload?.data?.body?.token || ""
            return state
        })
        .addCase(revertAll, () => "")
        .addCase(updateToken, (state, { payload: token}) => {
            return token
        })
    }
})

export default loginSlice.reducer