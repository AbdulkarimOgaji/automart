import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Automobile {
    type: 'CAR' | 'MOTORCYCLE' | 'TRUCK';
    model: string;
    price: string;
    sellerId: string;
    imageUrl?: string;
}
export interface UserState {
  loginError: string;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNum: string;
    password: string;
    displayPic: string;
  };
  favourites: Set<Automobile>,
  cart: Set<Automobile>,
  isLoggedIn: boolean;
}

const initialState = {
  loginError: "",
  isLoggedIn: false,
  data: {
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
    registerRequest: (state, action: PayloadAction<UserState["data"]>) => {
        state.isLoggedIn = true
        state.data = action.payload
    },
    toggleFav: (state, action: PayloadAction<Automobile>) => {
        if (state.favourites.has(action.payload)) {
            state.favourites.delete(action.payload)
        }else {
            state.favourites.add(action.payload)
        }
        
    },
    addToCart: (state, action: PayloadAction<Automobile>) => {
        if (state.cart.has(action.payload)) {
            state.cart.delete(action.payload)
        }else {
            state.cart.add(action.payload)
        }
    }
  },
});

const { registerRequest } = userSlice.actions
export {registerRequest}

export default userSlice.reducer;