import jwt from "jsonwebtoken";
import APIErrorHandler from "./errorHandlerClass.js";
import asyncHandler from '../utils/asyncFunctionalHandler.js';
// CRITICAL: You must import your User model!
import User from "../models/User.js"; 

const authHandler = asyncHandler(async (req, res, next) => {
  // 1. Get the header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // 2. No token?
  if (!token) {
    return next(
      new APIErrorHandler("Authentication required. Please log in.", 401),
    );
  }

  // 3. Verify Token
  // If jwt.verify fails (expired or fake), asyncHandler catches it
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // 4. Check if user still exists in DB
  const userStillExists = await User.findById(decoded.userId);

  if (!userStillExists) {
    return next(new APIErrorHandler("This user no longer exists.", 401));
  }

  // 5. Attach user to request
  // TIP: Attach the actual DB user object so your controllers 
  // don't have to query the database again!
  req.user = userStillExists;

  // 6. Move to the next middleware or controller
  next();
});

export default authHandler;