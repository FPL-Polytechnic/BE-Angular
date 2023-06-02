import express from "express";
import { createCategory, getAll, remove, updateCategory } from "../controllers/category";





const router = express.Router();


router.post("/category", createCategory);
router.delete("/category/:id", remove)
router.get("/category", getAll)
router.patch("/category/:id",updateCategory)

export default router;
