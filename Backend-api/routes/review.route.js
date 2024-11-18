import express from "express";
import { deleteReview } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/test",deleteReview);
//res.send("ALHUMDOLLILAH it works");




export default router;
