import { createSlice } from "@reduxjs/toolkit";

const initialState = { locale: "am" };

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("locale", action.payload);
      }
    },
    hydrateLocale(state) {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("locale");
        if (saved) {
          state.locale = saved;
        }
      }
    },
  },
});

export const { setLocale, hydrateLocale } = langSlice.actions;

export default langSlice.reducer;
