
/*import User from '../models/user.model.js';
// Adjust the path based on your project structureexport 

// Controller to handle deleteAuth route
 const deleteAuth = (req,res) => {
   
    //TODO
    res.send("from Authcontroller");

}
export const register = async (req,res) => {

    //TODO


    try{
        //create a new user using user.model.js
        const newUser = new User({
            username:"hinaFarrukh",
            email:"test",
            password:"432tyu",
            country:"Pakistan",
        });
// save the data in our database using mongoose
        await newUser.save();
        res.status(201).send("user has been created");// succesfully saved /success message


    }catch(err){
        res.status(500).send("Something went wrong here")
    }

}
export const login = async (req,res) => {

    //TODO
    res.send("");

}
export const logout = async (req,res) => {

    //TODO
    res.send("");

}*/


/*import User from '../models/user.model.js';  
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';



const bcrypt = require('bcrypt');  // CommonJS style




//Controller to handle deleteAuth route
export const deleteAuth = (req, res) => {
    res.send("from Authcontroller");
};

// Controller to handle user registration
export const register = async (req, res, next) => {
    try {
         //Create a new user using user.model.js
        
       /* const newUser = new User(req.body);
        {
          username: req.body.username,  // Get the username from the request body
            email: req.body.email,        // Get the email from the request body
            password: req.body.password,  // Get the password from the request body
            country: req.body.country,    // Get the country from the request body*/
       
          /* username:"hji",
            email:"test1",
            password:"test",
            country:"test", });*/

       // });
/*const encrypt = bcrypt.hashSync(req.body.password, 9);
        const newUser = new User({
           
            ...req.body,
            password: encrypt,
        })
        
        // Save the new user in the database
       await newUser.save();

        // Respond with success message and status 201
        res.status(201).send("User has been created");
    } catch (err) {

        next (err)
        // Log the error and send a 500 response if something goes wrong
       // console.error("Error during registration:", err);
        //res.status(500).send("Something went wrong here");
    }
};

// Controller to handle user login
export const login = async (req, res, next ) => {
    try{

        // TODO: Implement login logic
        const user = await User.findOne({username:req.body.username})
      //const err = new Error() ;
      //err.status = 404;
      //err.message="User not found"
        if(!user) return next(createError(404,"User not found!"))

            
          const isCorrect = bcrypt.compareSync(req.body.password,user.password)
          if(!isCorrect) return next(createError(404,"Wrong password or username!"))

            const token = jwt.sign({

                id: user._id,
                isSeller:user.isSeller,
            },
              process.env.JWT_KEY);
                // ensuring user details are returned without the user password
             const{password,...info}= user._doc;
            res.cookie("accessToken",token,{ httpOnly:true}).status(200).send(info)


    }
    catch (err) {
        // Log the error and send a 500 response if something goes wrong
       // console.error("Error during registration:", err);
       // res.status(500).send("Something went wrong here");
       next (err);
    
    
}};

// Controller to handle user logout
export const logout = async (req, res) => {
    // TODO: Implement logout logic
   // res.send("Logout functionality is not implemented yet.");
   res.clearCookie("accessToken",{
    sameSite:"none",
    secure:true,
}).status(200).send("user has been logged out")

   
}
; 

/*import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));
    const token = jwt.sign(
        {
            id: user._id,
            isSeller: user.isSeller,
        },
        process.env.JWT_KEY
    );
    console.log("Generated Token:", token); // Log the token
    

    /*const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );
    *

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
*/import User from '../models/user.model.js';  
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

// Controller to handle deleteAuth route
export const deleteAuth = (req, res) => {
    res.send("from Authcontroller");
};

//// Controller to handle user registration
/*export const register = async (req, res, next) => {
    try {
        const encrypt = bcrypt.hashSync(req.body.password, 9);
        const newUser = new User({
            ...req.body,
            password: encrypt,
        });
        
        // Save the new user in the database
        await newUser.save();

        // Respond with success message and status 201
        res.status(201).send("User has been created");
    } catch (err) {
        console.error("Error during registration:", err);
        next(createError(500, "Something went wrong!"));
    }
};*/
export const register = async (req, res, next) => {
  try {
      console.log("Registration request received:", req.body); // Log the incoming request

      // Check for existing user
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser) {
          return next(createError(409, "Username already exists!")); // Conflict error
      }

      // Hash the password
      const encrypt = bcrypt.hashSync(req.body.password, 9);

      // Create a new user
      const newUser = new User({
          ...req.body,
          password: encrypt,
      });

      // Save the new user in the database
      await newUser.save();

      // Respond with success message and status 201
      res.status(201).send("User has been created");
  } catch (err) {
      console.error("Error during registration:", err); // Log the error details
      if (err.name === 'ValidationError') {
          return next(createError(400, "Validation error: " + err.message)); // Handle validation errors
      }
      return next(createError(500, "Something went wrong!")); // Generic server error
  }
};



// Controller to handle user login
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "User not found!"));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return next(createError(401, "Wrong password or username!"));

        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller,
            },
            process.env.JWT_KEY,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
    } catch (err) {
        console.error("Error during login:", err);
        next(createError(500, "Something went wrong!"));
    }
};

// Controller to handle user logout
export const logout = async (req, res) => {
    res.clearCookie("accessToken", { sameSite: "none", secure: false }) // Adjust secure flag based on your environment
        .status(200)
        .send("User has been logged out");
};
