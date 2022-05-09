import { Schema, model } from "mongoose";

export interface IAutoMobile {
    sellerId: string;
    type: "CAR" | "MOTORCYCLE" | "TRUCK";
    model: string;
    imageUrl: string;
    price: number;

}

const automobileSchema = new Schema<IAutoMobile>(
  {
    
    sellerId: {
      type: String,
      required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true
  }
  },
  { timestamps: true }
);

export const AutoMobile = model<IAutoMobile>("Automobile", automobileSchema)