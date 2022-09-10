import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    darkmode: false,
  },
  reducers: {
    activateDarkMode: state => {
      state.darkmode = true;
    },
    deactivateDarkMode: state => {
      state.darkmode = false;
    },
  },
});

export const activateDarkMode = modeSlice.actions.activateDarkMode;
export const deactivateDarkMode = modeSlice.actions.deactivateDarkMode;
export default modeSlice.reducer;
