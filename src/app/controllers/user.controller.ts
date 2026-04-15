import express, { Request, Response } from "express";
import { User } from "./../modules/user.modules";

export const userRoutes = express.Router();

// create a user
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);

  res.status(201).json({
    success: true,
    message: "Successfully create a user.",
    user: user,
  });
});

// read all user data
userRoutes.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.find(body);

  res.status(201).json({
    success: true,
    message: "Successfully read all user data.",
    user: user,
  });
});

// read single user data
userRoutes.get("/:userId", async (req: Request, res: Response) => {
  const id = req.params.userId;
  const user = await User.findById(id);

  res.status(201).json({
    success: true,
    message: "Successfully read user data.",
    user: user,
  });
});

// delete single user data
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const id = req.params.userId;
  const user = await User.deleteOne({ _id: id });

  res.status(201).json({
    success: true,
    message: "Successfully delete user data.",
    user: user,
  });
});

// update single user data
userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const id = req.params.userId;
  const updatedBody = req.body;
  const user = await User.findByIdAndUpdate(id, updatedBody, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "Successfully update user data.",
    user: user,
  });
});
