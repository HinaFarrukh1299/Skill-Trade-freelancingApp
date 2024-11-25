/*import express from 'express';
import mongoose from 'mongoose';
//import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import crypto from 'crypto';
import cors from "cors";


const app = express();
mongoose.set('strictQuery', true); // No need to import MongoClient again
dotenv.config();

//const crypto = require('crypto');

// Generate MD5 hash of a string



const secret = process.env.JWT_KEY;  // Load the string from .env
const hash = crypto.createHash('md5').update(secret).digest('hex');
console.log(hash);





//const uri = "mongodb+srv://hina1299:mongoDB1299@cluster1."+
//"ujwhtsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1&dbName=SkillTrade";



//async function run(){
const connect = async() => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
   // await mongoose.connect(uri);
   await mongoose.connect(process.env.MONGO);
    console.log('connected to mongoDB')
    // Send a ping to confirm a successful connection
  }
  catch(error){
    console.log(error);
  }
}
//}
//middleware
app.use(cors({
  origin: "http://localhost:5174", // Frontend origin
  credentials: true // If you're sending cookies or using authentication
}));


app.use(express.json());// allows us to create documents in mongodb through the body of the file
app.use(cookieParser());
app.use((err,req,res,next)=> {

const errorStatus = err.status || 500 ;
const errorMessage = err.message || " Something Went Wrong " ;
return res.status(errorStatus).send(errorMessage);

})

////Routes

app.use("/api/users",userRoute);
app.use("/api/messages",messageRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/reviews",reviewRoute);
app.use("/api/orders",orderRoute);
app.use("/api/auths",authRoute);
//app.use("/api/auths",deleteAuth);





// Start the Express server
app.listen(8105, () => {
    connect();
    console.log('Backend server is running on port 8105'); // Port corrected to 9440 as per your listen method
});
*/
/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from "axios";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);




app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8105, () => {
  connect();
  console.log("Backend server is running!");
}); ////*/
/***import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary"; // Import Cloudinary SDK
import jwt from 'jsonwebtoken';


const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to DB
  }
};

// Middleware
//app.use(cors({ origin: "http://localhost:5174", credentials: true }));
const allowedOrigins = ["http://localhost:5174","https://HinaFarrukh1299.org"];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate Signature Route
app.post("/api/upload-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp, upload_preset: "your_upload_preset" },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ timestamp, signature });
});

// Routes
app.use("/api/auths", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

// Start the server
app.listen(8105, () => {
  connect();
  console.log("Backend server is running on port 8105!");
});
fetch("http://localhost:8105/api/health")
  .then((res) => res.json())
  .then((data) => setApiStatus(data.status))
  .catch((error) => {
    console.error("Error fetching API:", error);
    setApiStatus("Error");
  });



/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary"; // Import Cloudinary SDK
import axios from 'axios';

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate Signature Route
app.post("/api/upload-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp, upload_preset: "your_upload_preset" },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ timestamp, signature });
});

app.use("/api/auths", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8105, () => {
  connect();
  console.log("Backend server is running!");
});


/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary"; // Import Cloudinary SDK
//import morgan from "morgan"; // Optional for logging

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// Check for required environment variables
if (!process.env.MONGO || !process.env.JWT_KEY) {
  console.error("Missing required environment variables!");
  process.exit(1);
}

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
//app.use(morgan("dev")); // Log requests to the console

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate Signature Route
app.post("/api/upload-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp, upload_preset: "your_upload_preset" },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ timestamp, signature });
});

// Routes
app.use("/api/auths", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

// Start the server
app.listen(8105, () => {
  connect();
  console.log("Backend server is running on port 8105!");
});
*/
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary"; // Import Cloudinary SDK
import jwt from 'jsonwebtoken';

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// Check for required environment variables
if (!process.env.MONGO || !process.env.JWT_KEY) {
  console.error("Missing required environment variables!");
  process.exit(1);
}

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to DB
  }
};

// CORS configuration
const allowedOrigins = ["http://localhost:5174", "https://HinaFarrukh1299.org"];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Generate Signature Route
app.post("/api/upload-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp, upload_preset: "your_upload_preset" },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ timestamp, signature });
});

// API Routes
app.use("/api/auths", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

// Start the server
app.listen(8105, () => {
  connect();
  console.log("Backend server is running on port 8105!");
});
// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});
