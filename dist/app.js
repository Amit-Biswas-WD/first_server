"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./app/controllers/user.controller");
const product_controller_1 = require("./app/controllers/product.controller");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/users", user_controller_1.userRoutes);
exports.app.use("/products", product_controller_1.productRoutes);
exports.app.get("/", (req, res) => {
    res.send(`Welcome to my first mongoose app.`);
});
