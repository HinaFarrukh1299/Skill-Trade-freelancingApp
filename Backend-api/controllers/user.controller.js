
import jwt from 'jsonwebtoken';  // Add this line at the top of your file
import User from "../models/user.model.js";
import createError from "../utils/createError.js";



export const deleteUser = async(req,res,next) => {
    const user = await User.findById(req.params.id);
    //TODO
  if(req.userId !== user.id.toString()) {
return next(createError(403,"You can only delete your account"))

  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted");
} 

 /* import jwt from 'jsonwebtoken'; // Ensure this is at the top
import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    // Fetch the user based on the provided ID from the request parameters
    const user = await User.findById(req.params.id);
    
    // Check if the user exists
    if (!user) {
      return next(createError(404, "User not found"));
    }

    // Check if the user is authorized to delete the account
    if (req.userId !== user.id.toString()) {
      return next(createError(403, "You can only delete your account"));
    }

    // Delete the user
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted successfully");
  } catch (err) {
    // Handle any errors that occur during the process
    next(createError(500, "An error occurred while deleting the user"));
  }
};
*/

