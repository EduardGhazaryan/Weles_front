import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogByIdThunk } from "./blogsApi";

const initialState = {
  blog : null,
  isLoading : false
};

const blogsSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {

  },
    extraReducers: (builder) => {
      builder
      .addCase(fetchBlogByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogByIdThunk.fulfilled, (state, action) => {
        state.blog = action?.payload || null
        state.isLoading = false;
      })
      .addCase(fetchBlogByIdThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed";
      });
    },
});


export default blogsSlice.reducer;
