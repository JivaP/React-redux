import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slice/Customerslice";

export const store = configureStore({
    reducer: {
        customer: customerReducer,
    },
    devTools: true,
});
