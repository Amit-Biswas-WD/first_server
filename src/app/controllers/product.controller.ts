import express, { Request, Response } from "express";
import { Product } from "../modules/product.modules";

export const productRoutes = express.Router();

// create a product
productRoutes.post("/create-product", async (req: Request, res: Response) => {
  const body = req.body;
  const product = await Product.create(body);

  res.status(201).json({
    success: true,
    message: "Successfully create a product.",
    product: product,
  });
});

// read all product data
productRoutes.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  const product = await Product.find(body);

  res.status(201).json({
    success: true,
    message: "Successfully read all product data.",
    product: product,
  });
});

// read single product data
productRoutes.get("/:productId", async (req: Request, res: Response) => {
  const id = req.params.productId;
  const product = await Product.findById(id);

  res.status(201).json({
    success: true,
    message: "Successfully read product data.",
    product: product,
  });
});

// delete single product data
productRoutes.delete("/:productId", async (req: Request, res: Response) => {
  const id = req.params.productId;
  const product = await Product.deleteOne({ _id: id });

  res.status(201).json({
    success: true,
    message: "Successfully delete product data.",
    product: product,
  });
});

// update single product data
productRoutes.patch("/:productId", async (req: Request, res: Response) => {
  const id = req.params.productId;
  const updatedBody = req.body;
  const product = await Product.findByIdAndUpdate(id, updatedBody, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "Successfully update product data.",
    product: product,
  });
});
