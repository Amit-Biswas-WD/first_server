import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin"],
      default: "user",
    },
    address: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model("User", UserSchema);
