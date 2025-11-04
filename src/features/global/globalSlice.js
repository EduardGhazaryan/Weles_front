import { createSlice } from "@reduxjs/toolkit";
import { getHomePageDatasThunk } from "./globalApi";

const initialState = {
  about : null,
  contact : null,
  contentSliders : null,
  heroBanners : null,
  social : null,
  blogs : [],
  loading : false,
  error : null
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSections: (state, action) => {
      state.sections = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getHomePageDatasThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(getHomePageDatasThunk.fulfilled, (state, action) => {
      state.loading = false;
      const data = action.payload;
      state.about = data?.about;
      state.contact = data?.contact;
      state.contentSliders = data?.contentSliders;
      state.heroBanners = data?.heroBanners;
      state.social = data?.social;
      state.blogs = data?.blogs;
    })
    .addCase(getHomePageDatasThunk.rejected, (state) => {
      state.loading = false;
      state.error = "Failed";
    });
  },
});

export const { setSections} = globalSlice.actions;
export default globalSlice.reducer;
