import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice.js"
import dashboardSlice from "./dashboardSlice.js"
import profileSlice from "./profileSlice.js"

import { argentBankApi } from "../service/api.js"

let state = {}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        login: loginSlice,
        dashboard: dashboardSlice,
        profile: profileSlice,
        [argentBankApi.reducerPath]: argentBankApi.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(argentBankApi.middleware)
})

export default store