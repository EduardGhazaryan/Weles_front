import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections : null
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSections: (state, action) => {
      state.sections = action.payload;
    }
  },
});

export const { setSections} = globalSlice.actions;
export default globalSlice.reducer;
