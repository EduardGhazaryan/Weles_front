import { createSlice } from "@reduxjs/toolkit";

const initialState = { locale: "am" };

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = langSlice.actions;

export default langSlice.reducer;
