import { createSlice } from "@reduxjs/toolkit";


export const Counter = createSlice({
    name: "Counter",
    initialState: {count : 0},
    reducers: {
        increament: (state, action) => {
            state.count += 1;
        },
        decreament: (state, action) => {
            state.count -= 1;
        }
    }
});

export const { increament, decreament } = Counter.actions;
export default Counter.reducer;