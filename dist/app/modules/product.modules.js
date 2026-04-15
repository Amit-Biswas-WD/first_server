"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    user: { type: String, required: true },
    comment: { type: String },
    rating: { type: Number, default: 0, min: 1, max: 5 },
}, { _id: false });
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: [{ type: String }],
    brand: { type: String },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    review: [ReviewSchema],
}, {
    timestamps: true,
    versionKey: false,
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
