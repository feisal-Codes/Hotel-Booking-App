import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRoomType } from "../../util/http";
import { url } from "../../util/urls";

let roomUrl = url + "room_type";

export const getRoomsData = createAsyncThunk(
  "rooms/getRoomsData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(roomUrl);
      console.log("we are in async thunk with the needed data");

      console.log(response.data);
      return response.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const RoomDataSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },

  reducers: {
    updateRoomData: (state, action) => {
      // console.log("***&&&&&&&&&&&&%%%%%%%%%%%%%%#########@@@@@@@@@@@@@");
      // console.log("this is the action payload");
      // console.log(action.payload);
      state.data.push(action.payload);
      // console.log(state);
    },
  },

  extraReducers: {
    [getRoomsData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getRoomsData.fulfilled]: (state, { payload }) => {
      (state.loading = false), (state.data = payload), (state.isSuccess = true);
    },
    [getRoomsData.rejected]: (state, { payload }) => {
      (state.loading = false),
        (state.isSuccess = false),
        (state.message = payload);
    },
  },
});

console.log("everything is here rejoice >>>>>>>>>>>>>>>>>>>");
console.log(RoomDataSlice.getInitialState());
export const { updateRoomData, getData } = RoomDataSlice.actions;

export default RoomDataSlice.reducer;
