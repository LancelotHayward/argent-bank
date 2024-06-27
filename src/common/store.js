import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSlice from "../pages/Signin/loginSlice"

export const store = configureStore({
    reducer: combineReducers({
        login: loginSlice
    })
})

