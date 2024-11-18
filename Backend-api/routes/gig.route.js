/*import express from "express";
import { createGig,deleteGig,getGig,getGigs } from "../controllers/gig.controller.js";
import jwt from 'jsonwebtoken';
import { verifyToken } from "../middleware/jwt.js";
import userModel from "../models/user.model.js";
import gigModel from "../models/gig.model.js";
//import jwt from 'jsonwebtoken';


const router = express.Router();

//router.get("/test",deleteGig);
//res.send("ALHUMDOLLILAH it works");
router.post("/",verifyToken,createGig)
router.delete("/:id",verifyToken,deleteGig)
router.get("/single/:id",verifyToken,getGig)
router.get("/",verifyToken,getGigs)




export default router; */

/*///import express from "express";
import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router(); // Initialize the router

// Define your routes
router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, getGig);
router.get("/", verifyToken, getGigs);

// Export the router
export default router;*/
/*import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;*////

/*import express from "express";
import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router(); // Initialize the router

// Define your routes
router.post("/", verifyToken, createGig);          // Create a gig
router.delete("/:id", verifyToken, deleteGig);     // Delete a gig by ID
router.get("/single/:id", verifyToken, getGig);    // Get a single gig by ID
router.get("/", verifyToken, getGigs);              // Get all gigs

// Export the router
export default router; */

import jwt from "jsonwebtoken";
import express from 'express';
import { createGig, deleteGig, getGig, getGigs } from '../controllers/gig.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/', verifyToken, createGig);  // Ensure this matches your expected route
router.delete('/:id', verifyToken, deleteGig);
router.get("/single/:id", getGig);
//router.get('/:id', getGig);
router.get('/', getGigs);

export default router;

