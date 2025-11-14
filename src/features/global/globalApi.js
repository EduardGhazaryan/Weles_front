import { createAsyncThunk } from "@reduxjs/toolkit";
import  baseApi  from "../../baseApi/baseApi";

export const getHomePageDatasThunk = createAsyncThunk(
  "getHomePageDatas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await baseApi.get("/HomePageInfo");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const sendFormDataThunk = createAsyncThunk(
  "sendFormData",
  async ({data}, { rejectWithValue }) => {
    try {
      const response = await baseApi.post("/contactEmail", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
