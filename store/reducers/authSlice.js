import { createSlice } from "@reduxjs/toolkit";

const AuthenicationSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    user:{
      token:"",
      id:""
    }
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuth = true;
      state.user.token = action.payload.token
      state.user.id=action.payload.userId
      console.log("this is our state")
      console.log(state)
    },
    logoutUser: state => {
      state.isAuth = false;
    },
  },
}); 

export const loginUser = AuthenicationSlice.actions.loginUser;
export const logoutUser = AuthenicationSlice.actions.logoutUser;
export default AuthenicationSlice.reducer;
