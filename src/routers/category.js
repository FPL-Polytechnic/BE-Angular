import express from "express";
import { createCategory, get, getAll, remove } from "../controllers/category";



const router = express.Router();


router.post("/category", createCategory);
router.delete("/category/:id", remove)
router.get("/category", getAll)
router.get("/category/:id", get)


export default router;
