import express from "express";
import { createCategory, getAll, remove } from "../controllers/category";





const router = express.Router();


router.post("/category", createCategory);
router.delete("/category/:id",remove)
router.get("/category",getAll)


export default router;
