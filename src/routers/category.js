import express from "express";
import { createCategory, getAll } from "../controllers/category";

const router = express.Router();


router.post("/category", createCategory);
router.get("/category", getAll);


export default router;
