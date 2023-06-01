import express from "express";
import { createCategory } from "../controllers/category";

const router = express.Router();


router.post("/category", createCategory);


export default router;
