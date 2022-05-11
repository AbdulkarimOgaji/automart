import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Automobile } from "../../components/SingleAutoMobile";



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
  favourites: Set<Automobile>,
  cart: Set<Automobile>,
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
  },
  favourites: new Set() as Set<Automobile>,
  cart: new Set() as Set<Automobile>,
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
    toggleFav: (state, action: PayloadAction<Automobile>) => {
        if (state.favourites.has(action.payload)) {
            state.favourites.delete(action.payload)
        }else {
            state.favourites.add(action.payload)
        }
        
    },
    toggleCart: (state, action: PayloadAction<Automobile>) => {
        if (state.cart.has(action.payload)) {
            state.cart.delete(action.payload)
        }else {
            state.cart.add(action.payload)
        }
    }
  },
});

const { loginRequest } = userSlice.actions
export {loginRequest}

export default userSlice.reducer;