import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { argentBankApi } from "../service/api.js"

export const profileThunk = createAsyncThunk(
    "profile/profileThunk",
    async ({token, firstName, lastName}, thunkAPI) => {
        // const response = await thunkAPI.dispatch(useLoginMutation(email, password))
        console.log(firstName + " " + lastName)
        const data = await thunkAPI.dispatch(argentBankApi.endpoints.profile.initiate({token, firstName, lastName}))
        return data
    }
)
// TODO : error 400 (bad token)
const profileSlice = createSlice({
    name: "profile",
    initialState: "",
    extraReducers: (builder) => {
       builder.addCase(profileThunk.fulfilled, (state, action) => {
        state = action.payload?.data?.body || ""
        return state
       })
    }
})

export default profileSlice.reducer