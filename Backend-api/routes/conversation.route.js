import express from "express";
import { deleteConversation } from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/test",deleteConversation);
//res.send("ALHUMDOLLILAH it works");




export default router;
