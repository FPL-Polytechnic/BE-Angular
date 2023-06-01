import express from "express";
import { createProduct, getAll, updateProduct } from "../controllers/product";

const router = express.Router();


router.post("/product", createProduct);
router.patch("/product/:id",updateProduct)
router.get("/product",getAll)



export default router;
