import express from "express";
import {updateAllUser,removeUser, getAllUser, signin, signup } from "../controllers/auth";


const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/user", getAllUser);
router.patch("/get/:id",updateAllUser)
router.delete("/user/:id", removeUser);


export default router