"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
