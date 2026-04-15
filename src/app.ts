import express, { Application, Request, Response } from "express";
import { userRoutes } from "./app/controllers/user.controller";
import { productRoutes } from "./app/controllers/product.controller";

export const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to my first mongoose app.`);
});
