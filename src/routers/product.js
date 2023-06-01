import express from "express";
import { createProduct, remove, updateProduct } from "../controllers/product";

const router = express.Router();


router.post("/product", createProduct);
router.patch("/product/:id",updateProduct)
router.delete("/categories/:id",  remove);

export default router;
