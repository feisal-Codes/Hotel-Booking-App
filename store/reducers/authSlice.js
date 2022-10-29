import { createSlice } from "@reduxjs/toolkit";

const AuthenicationSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {
      token: "",
      id: "",
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
    },
  },
  reducers: {
    loginUser: (state, action) => {
      const { email, token, userId, firstname, lastname, phoneNumber } =
        action.payload;
      state.isAuth = true;
      state.user.token = token;
      state.user.id = userId;
      state.user.email = email;
      state.user.firstname = firstname;
      state.user.lastname = lastname;
      state.user.phoneNumber = phoneNumber;
      console.log("this is our state");
      console.log(state);
    },
    logoutUser: state => {
      state.isAuth = false;
    },
  },
});

export const loginUser = AuthenicationSlice.actions.loginUser;
export const logoutUser = AuthenicationSlice.actions.logoutUser;
export default AuthenicationSlice.reducer;
