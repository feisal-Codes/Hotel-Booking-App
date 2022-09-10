import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./reducers/mode"

export const store = configureStore({
  reducer: {
    mode:modeReducer
  },
});
