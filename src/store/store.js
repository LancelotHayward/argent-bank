import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice.js"
import { argentBankApi } from "../service/api.js"

export const store = configureStore({
    reducer: combineReducers({
        login: loginSlice,
        [argentBankApi.reducerPath]: argentBankApi.reducer
    })
})

export default store