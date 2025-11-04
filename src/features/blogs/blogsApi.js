import { createAsyncThunk } from "@reduxjs/toolkit";
import  baseApi  from "../../baseApi/baseApi";

export const fetchBlogsThunk = createAsyncThunk(
  "fetchBlogsThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await baseApi.get("/blogs");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const fetchBlogByIdThunk = createAsyncThunk(
  "fetchBlogByIdThunk",
  async ({id}, { rejectWithValue }) => {
    try {
      const response = await baseApi.get(`/blog/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
