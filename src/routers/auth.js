import express from "express";
import {updateAllUser, getAllUser, signin, signup } from "../controllers/auth";

const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/get", getAllUser);
router.patch("/get/:id",updateAllUser)


export default router