import express from "express";
import { createProduct, getAll, remove, updateProduct } from "../controllers/product";

const router = express.Router();


router.post("/product", createProduct);
router.patch("/product/:id",updateProduct)
router.get("/product",getAll)
router.delete("/product/:id",remove)



export default router;
