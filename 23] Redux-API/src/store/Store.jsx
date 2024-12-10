import { configureStore } from "@reduxjs/toolkit";
import Slice from "../slices/Slice";

export const store = configureStore({
    reducer:{
        key : Slice,
    }
});