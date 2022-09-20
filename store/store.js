import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import hotelDataSlice from "./reducers/hotelDataSlice";
import roomsDataSlice from "./reducers/roomsDataSlice";

export const store = configureStore({
  reducer: {
    auth:authReducer,
    rooms:roomsDataSlice,
    hotel: hotelDataSlice
  },
});
