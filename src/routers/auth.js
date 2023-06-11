import express from "express";
import { updateAllUser, removeUser, getAllUser, signin, signup } from "../controllers/auth";
import checkPermission from "../middlewares/checkPermission";


const router = express.Router();


router.post("/signin", signin);
router.post("/signup", signup);
router.get("/user", getAllUser);
router.patch("/user/:id", updateAllUser)
router.delete("/user/:id", removeUser);


export default router