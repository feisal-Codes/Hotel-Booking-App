import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let hotelUrl = "http://192.168.100.10:3001/admin/get_hotel";

export const getHotelsData = createAsyncThunk(
  "hotel/getHotelsData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(hotelUrl);
      console.log("we are in hotel async thunk with the needed data");
      console.log(response.data);
      return response.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const HotelsDataSlice = createSlice({
  name: "hotel",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },

  reducers: {
    updateHotelData: (state, action) => {
      console.log("***&&&&&&&&&&&&%%%%%%%%%%%%%%#########@@@@@@@@@@@@@");
      console.log("this is the hotel action payload");
      console.log(action.payload);
      state.data.push(action.payload);
      console.log(state);
    },
  },

  extraReducers: {
    [getHotelsData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getHotelsData.fulfilled]: (state, { payload }) => {
      (state.loading = false), (state.data = payload), (state.isSuccess = true);
    },
    [getHotelsData.rejected]: (state, { payload }) => {
      (state.loading = false),
        (state.isSuccess = false),
        (state.message = payload);
    },
  },
});

console.log("everything is here rejoice >>>>>>>>>>>>>>>>>>>");
export const { updateHotelData } = HotelsDataSlice.actions;

export default HotelsDataSlice.reducer;
