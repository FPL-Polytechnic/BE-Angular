import express from "express";
import { createProduct, getAll, getOneProduct, remove, updateProduct } from "../controllers/product";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();


router.post("/product", checkPermission, createProduct);
router.patch("/product/:id", checkPermission, updateProduct)
router.get("/product", getAll)
router.get("/product/:id", getOneProduct)
router.delete("/product/:id", checkPermission, remove)



export default router;
