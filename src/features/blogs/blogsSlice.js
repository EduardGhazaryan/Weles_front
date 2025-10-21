import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  currentPage: 1,
  itemsPerPage: 3,
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
});

export const { setSearch, setCurrentPage } = blogsSlice.actions;
export default blogsSlice.reducer;
