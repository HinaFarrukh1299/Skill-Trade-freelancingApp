import express from "express";
import { deleteMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/test",deleteMessage);
//res.send("ALHUMDOLLILAH it works");




export default router;
