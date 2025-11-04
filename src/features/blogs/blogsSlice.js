import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogsThunk } from "./blogsApi";

const initialState = {
  search: "",
  currentPage: 1,
  itemsPerPage: 3,
  blogs : [],
  isLoading : false,
  error : null
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
    extraReducers: (builder) => {
      builder
      .addCase(fetchBlogsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogsThunk.fulfilled, (state, action) => {
        state.blogs = action?.payload?.data || []
        state.isLoading = false;
      })
      .addCase(fetchBlogsThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed";
      });
    },
});

export const { setSearch, setCurrentPage } = blogsSlice.actions;
export default blogsSlice.reducer;
