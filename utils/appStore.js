
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    // devTools: process.env.NODE_ENV !== "production",
});


export default appStore;