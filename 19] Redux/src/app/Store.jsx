import { configureStore } from "@reduxjs/toolkit";
import Counter from "../feature/Slice";

export const store = configureStore({
    reducer: {
        CounterKey: Counter,
    }
})
