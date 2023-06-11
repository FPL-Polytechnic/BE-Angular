import express from "express";
import { createCategory, get, getAll, remove, updateCategory } from "../controllers/category";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.post("/category",checkPermission, createCategory);
router.delete("/category/:id",checkPermission, remove)
router.get("/category", getAll)
router.get("/category/:id", get)
router.patch("/category/:id",checkPermission, updateCategory)

export default router;
