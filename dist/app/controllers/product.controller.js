"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_modules_1 = require("../modules/product.modules");
exports.productRoutes = express_1.default.Router();
// create a product
exports.productRoutes.post("/create-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const product = yield product_modules_1.Product.create(body);
    res.status(201).json({
        success: true,
        message: "Successfully create a product.",
        product: product,
    });
}));
// read all product data
exports.productRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const product = yield product_modules_1.Product.find(body);
    res.status(201).json({
        success: true,
        message: "Successfully read all product data.",
        product: product,
    });
}));
// read single product data
exports.productRoutes.get("/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.productId;
    const product = yield product_modules_1.Product.findById(id);
    res.status(201).json({
        success: true,
        message: "Successfully read product data.",
        product: product,
    });
}));
// delete single product data
exports.productRoutes.delete("/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.productId;
    const product = yield product_modules_1.Product.deleteOne({ _id: id });
    res.status(201).json({
        success: true,
        message: "Successfully delete product data.",
        product: product,
    });
}));
// update single product data
exports.productRoutes.patch("/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.productId;
    const updatedBody = req.body;
    const product = yield product_modules_1.Product.findByIdAndUpdate(id, updatedBody, {
        new: true,
        runValidators: true,
    });
    res.status(201).json({
        success: true,
        message: "Successfully update product data.",
        product: product,
    });
}));
