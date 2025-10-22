import { configureStore } from "@reduxjs/toolkit";
import langReducer from "@/features/lang/langSlice"
import blogsReducer from "@/features/blogs/blogsSlice";
import globalReducer from "@/features/global/globalSlice";

export const store = configureStore({
  reducer: {
    lang: langReducer,
    blogs: blogsReducer,
    global : globalReducer
  },
});
