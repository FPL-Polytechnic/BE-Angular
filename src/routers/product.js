import express from "express";
import { createProduct, updateProduct } from "../controllers/product";

const router = express.Router();


router.post("/product", createProduct);
router.patch("/product/:id",updateProduct)

export default router;
