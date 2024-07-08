import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice.js"
import dashboardSlice from "./dashboardSlice.js"

import { argentBankApi } from "../service/api.js"

let state = {}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        login: loginSlice,
        dashboard: dashboardSlice,
        [argentBankApi.reducerPath]: argentBankApi.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(argentBankApi.middleware)
})

export default store