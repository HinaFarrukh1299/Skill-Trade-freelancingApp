/*import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";


export const createGig = async (req,res,next) => {

    //TODO
    //res.send("from Gigcontroller");
    if(!req.isSeller)
         return next(createError(403,'Only Sellers can create a gig!'))

    const newGig = new Gig({
        userId : req.userId,// request id from jwt
        ...req.body,
    });
    try{
        const savedGig = await newGig.save();
        res.status(201).json(savedGig)
    }
    catch(err){
        next(err)
    }

}
export const deleteGig = (req,res,next) => {

    //TODO
    res.send("from Gigcontroller");

}
export const getGig = (req,res,next) => {

    //TODO
    res.send("from Gigcontroller");

}
export const getGigs = (req,res,next) => {

    //TODO
    res.send("from Gigcontroller");

}*/

/*import jwt from "jsonwebtoken"
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import userModel from "../models/user.model.js"; // Make sure the user model is imported*/
//import gigModel from "../models/gig.model.js";
import jwt from "jsonwebtoken"
import createError from "../utils/createError.js";
import userModel from "../models/user.model.js"; // Make sure the user model is imported*/
//import User from "../models/user.model.js"; // Make sure the user model is imported*/
//import Gig from "../models/gig.model.js";
import mongoose from "mongoose"; // Ensure mongoose is imported
import gigModel from "../models/gig.model.js";

export const createGig = async (req, res, next) => {
    try {
        // Fetch the user by ID from the database
        const user = await userModel.findById(req.userId);
        if (!user) {
            return next(createError(404, "User not found"));
        }

        // Check if the user is a seller
        if (!user.isSeller) {
            return next(createError(403, "Only sellers can create a gig!"));
        }

        // Proceed with creating the gig
        const newGig = new gigModel({
            userId: req.userId, // request id from JWT
            ...req.body,
        });

        const savedGig = await newGig.save();
        //res.status(201).json(savedGig);
        res.status(201).json({
            message: "Gig successfully created",
            gig: savedGig,
        });
    } catch (err) {
        next(err);
    }
};


export const deleteGig = async (req, res, next) => {
    try {
        // Check if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(createError(400, "Invalid gig ID"));
        }

        const gig = await gigModel.findById(req.params.id);
        
        // Check if gig exists
        if (!gig) {
            return next(createError(404, "Gig not found"));
        }
        
        // Check if the user is authorized to delete the gig
        if (gig.userId.toString() !== req.userId) {
            return next(createError(403, "You can only delete your own gig!"));
        }

        await gigModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Your gig has been deleted");
    } catch (err) {
        next(err);
    }
};

/*export const deleteGig = async (req, res, next) => {
    try {
        const userId = req.body.userId; // Get the user ID from the request body

        // Find the gig associated with the user ID
        const gig = await gigModel.findOne({ userId: userId });

        // Check if gig exists
        if (!gig) {
            return next(createError(404, "Gig not found for this user"));
        }

        // Check if the user is authorized to delete the gig
        if (gig.userId.toString() !== req.userId) {
            return next(createError(403, "You can only delete your own gig!"));
        }

        // Delete the gig
        await gigModel.findByIdAndDelete(gig._id); // Use gig._id to delete the found gig
        res.status(200).send("Your gig has been deleted");
    } catch (err) {
        next(err);
    }
};*/


export const getGig = async (req,res,next) => {

    //TODO
    //res.send("from Gigcontroller");
    try{

        const gig = await gigModel.findById(req.params.id);
        if(!gig)next(createError(404,"Gig not found"))        
            res.status(200) .send(gig)

    }catch(err){
       next(err);
    }

}
export const getGigs = async (req, res, next) => {
    const q = req.query;
    const filters = {
      ...(q.userId && { userId: q.userId }),
      ...(q.cat && { cat: q.cat }),
      ...((q.min || q.max) && {
        price: {
          ...(q.min && { $gt: q.min }),
          ...(q.max && { $lt: q.max }),
        },
      }),
      ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try {
      const gigs = await gigModel.find(filters).sort({ [q.sort]: -1 });
      res.status(200).send(gigs);
    } catch (err) {
      next(err);
    }
  };