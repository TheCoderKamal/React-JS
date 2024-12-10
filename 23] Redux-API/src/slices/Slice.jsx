import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAPI = createAsyncThunk("fetchAPI", async () => {
    let response = await axios.get("http://localhost:5000/students");
    return response.data;
})

export const addData = createAsyncThunk("addData", async (object, { dispatch }) => {
    await axios.post("http://localhost:5000/students", object);
    dispatch(fetchAPI());
});

export const deleteData = createAsyncThunk("deleteData", async (id, { dispatch }) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    dispatch(fetchAPI());
});

export const updateData = createAsyncThunk("updateData", async (object, { dispatch }) => {
    await axios.put(`http://localhost:5000/students/${object.id}`, object);
    dispatch(fetchAPI());
})

export const Slice = createSlice({
    name: "Slice",
    initialState: {record: [], loading: true},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAPI.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
        }),

        builder.addCase(fetchAPI.pending, (state, action) => {
            state.loading = true;
        })
    }
})


export default Slice.reducer;   