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
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_modules_1 = require("./../modules/user.modules");
exports.userRoutes = express_1.default.Router();
// create a user
exports.userRoutes.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield user_modules_1.User.create(body);
    res.status(201).json({
        success: true,
        message: "Successfully create a user.",
        user: user,
    });
}));
// read all user data
exports.userRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield user_modules_1.User.find(body);
    res.status(201).json({
        success: true,
        message: "Successfully read all user data.",
        user: user,
    });
}));
// read single user data
exports.userRoutes.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const user = yield user_modules_1.User.findById(id);
    res.status(201).json({
        success: true,
        message: "Successfully read user data.",
        user: user,
    });
}));
// delete single user data
exports.userRoutes.delete("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const user = yield user_modules_1.User.deleteOne({ _id: id });
    res.status(201).json({
        success: true,
        message: "Successfully delete user data.",
        user: user,
    });
}));
// update single user data
exports.userRoutes.patch("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const updatedBody = req.body;
    const user = yield user_modules_1.User.findByIdAndUpdate(id, updatedBody, {
        new: true,
        runValidators: true,
    });
    res.status(201).json({
        success: true,
        message: "Successfully update user data.",
        user: user,
    });
}));
