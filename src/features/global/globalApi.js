import { createAsyncThunk } from "@reduxjs/toolkit";
import  baseApi  from "../../baseApi/baseApi";

export const getHomePageDatas = async () => {
  try {
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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
