import { configureStore } from "@reduxjs/toolkit";
import langReducer from "@/features/lang/langSlice"
import blogsReducer from "@/features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    lang: langReducer,
    blogs: blogsReducer,
  },
});
