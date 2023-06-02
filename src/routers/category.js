import express from "express";
import { createCategory, remove } from "../controllers/category";

const router = express.Router();


router.post("/category", createCategory);
router.delete("/category/:id",remove)

export default router;
