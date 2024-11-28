import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: "studentSlice",
    initialState: {data: []},
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        deleteData: (state, action) => {
            const data = state.data.filter(item => item.id !== action.payload);
            state.data = data;
        },
        updateData: (state, action) => {
            const student = state.data.find(item => item.id === action.payload.id);
            if(student){
                student.name = action.payload.name;
                student.subject = action.payload.subject;
            }
        },
    },
});

export const {addData, deleteData, updateData} = studentSlice.actions;
export default studentSlice.reducer;