/*import createError from "../utils/createError.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/user.model.js";

export const verifyToken = (req,res,next) => {


    const token = req.cookies.accessToken;
    if(!token) 
     return next(createError(401,"you are not authenticated"))

    
    jwt.verify(token,process.env.JWT_KEY, async (err,payload) => {
        if(err)
            return next(createError(403,"Token is not valid anymore"))
        

        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
             });
            } */

           /* //// import createError from "../utils/createError.js";
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    
    // Check if token exists
    if (!token) {
        console.log("No token provided");
        return next(createError(401, "You are not authenticated"));
    }

    // Verify token
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) {
            console.log("Invalid token", err);
            return next(createError(403, "Token is not valid anymore"));
        }

        // Token is valid, set userId and isSeller from token payload
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        console.log("Token verified, User ID:", req.userId, "Is Seller:", req.isSeller);

        next();
    });
};*/////

/*import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401,"You are not authenticated!"))


  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};
*/
/*import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  // Check if the token exists
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }

    // Set userId and isSeller from the payload
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
*/

import createError from "../utils/createError.js";
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    // Log the access token
    console.log("Access Token:", token);

    // Check if token exists
    if (!token) {
        console.log("No token provided");
        return next(createError(401, "You are not authenticated"));
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) {
            // Check if the error is due to token expiration
            if (err.name === "TokenExpiredError") {
                console.log("Token expired:", err);
                return next(createError(403, "Token has expired"));
            }
            console.log("Invalid token", err);
            return next(createError(403, "Token is not valid anymore"));
        }

        // Log the token payload for debugging
        console.log("Token payload:", payload);

        // Token is valid, set userId and isSeller from token payload
        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        console.log("Token verified, User ID:", req.userId, "Is Seller:", req.isSeller);

        next();
    });
};
