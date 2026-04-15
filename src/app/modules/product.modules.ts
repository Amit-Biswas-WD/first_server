import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product.interface";

const ReviewSchema = new Schema(
  {
    user: { type: String, required: true },
    comment: { type: String },
    rating: { type: Number, default: 0, min: 1, max: 5 },
  },
  { _id: false },
);

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: [{ type: String }],
    brand: { type: String },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    review: [ReviewSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model("Product", ProductSchema);
