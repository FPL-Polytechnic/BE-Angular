import express from "express";
import { getAllUser, removeUser, signin, signup } from "../controllers/auth";

const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/user", getAllUser);
router.delete("/user/:id", removeUser);


export default router