import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id",verifyToken,deleteUser);
//res.send("ALHUMDOLLILAH it works");
router.get("/register",deleteUser);
//router.get("/login",deleteUser);




export default router; 

