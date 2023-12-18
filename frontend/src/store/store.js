import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { api } from "./api/api";



const store = configureStore({
    reducer: {
        user: userSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})


export default store;
export * from "./slice/userSlice"
export * from "./slice/contactSlice"
export * from "./api/api"



