import express from "express";
import { deleteOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/test",deleteOrder);
//res.send("ALHUMDOLLILAH it works");




export default router;
