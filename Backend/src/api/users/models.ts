import { Schema, model } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    displayPic: string;
    email: string;
    phoneNum: string;
    passwordHash: string;
}

const userSchema = new Schema<IUser>(
  {
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    displayPic: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNum: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true
    },
    
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema)