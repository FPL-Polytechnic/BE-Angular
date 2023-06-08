import express from "express";
import { getAllUser, signin, signup } from "../controllers/auth";

const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/get", getAllUser);


export default router