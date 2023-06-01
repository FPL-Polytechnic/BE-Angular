import express from "express";
import { createProduct, getAll, updateProduct,remove } from "../controllers/product";

const router = express.Router();


router.post("/product", createProduct);
router.patch("/product/:id",updateProduct)
router.delete("/products/:id",  remove);
router.get("/product",getAll)



export default router;
