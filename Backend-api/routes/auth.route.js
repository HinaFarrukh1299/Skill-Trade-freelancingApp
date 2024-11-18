import express from "express";
import { register } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
import { deleteUser } from "../controllers/user.controller.js";


const router = express.Router();

//router.get("/test",deleteUser);
//res.send("ALHUMDOLLILAH it works");

router.get("/test",deleteUser);// this endpoint was created for test purpose only
router.post("/register",register);
//router.post("/login",login);
router.post("/login", login);

router.post("/logout",logout);



export default router;
