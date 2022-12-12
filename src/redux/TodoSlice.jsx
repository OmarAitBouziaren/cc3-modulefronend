import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getTache = createAsyncThunk("todos/getTache", async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    return response.data;
});

export const TodoSlice = createSlice({
    name: "tache",
    initialState: {
    data: [],
    loading: "idle",
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTache.pending, (state, action) => {
        if (state.loading === "idle") {
        state.loading = "pending";
        }
    });
    builder.addCase(getTache.fulfilled, (state, action) => {
        if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
        }
    });
    builder.addCase(getTache.rejected, (state, action) => {
        if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
        }
    });
    },
});
export default TodoSlice.reducer;
