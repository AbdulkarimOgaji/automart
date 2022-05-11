import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface UserState {
  loginError: string;
  accessToken: string;
  isLoggedIn: boolean;
  data: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNum: string;
    password: string;
    displayPic: string;
  };
  
}

const initialState = {
  loginError: "",
  isLoggedIn: false,
  accessToken: "",
  data: {
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNum: "",
    password: "",
    displayPic: "/images/default.jpg"
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{data:UserState["data"], token:string}>) => {
        state.isLoggedIn = true
        state.data = action.payload.data
        state.accessToken = action.payload.token
    },
    logout: (state) => {
      state = initialState
    }
  },
});

const { loginRequest, logout } = userSlice.actions
export {loginRequest, logout}

export default userSlice.reducer;