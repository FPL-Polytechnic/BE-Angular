import express from "express";
import { updateAllUser, removeUser, getAllUser, signin, signup, getOneUser } from "../controllers/auth";


const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/user", getAllUser);
router.get("/user/:id", getOneUser);
router.patch("/user/:id", updateAllUser)
router.delete("/user/:id", removeUser);


export default router