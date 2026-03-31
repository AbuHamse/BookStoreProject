import jwt from "jsonwebtoken";
import APIErrorHandler from "./errorHandlerClass.js";
import asyncHandler from '../utils/asyncFunctionalHandler.js'

const authHandler = asyncHandler(async (req, res, next) => {
  // 1. Get the header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // 2. No token? Throw to the global handler
  if (!token) {
    return next(
      new APIErrorHandler("Authentication required. Please log in.", 401),
    );
  }

  // 3. Verify Token
  // If this fails, the error is caught by asyncHandler and sent to globalErrorHandler
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Now you can safely use 'await' because of the asyncHandler!
  const userStillExists = await User.findById(decoded.userId);

  if (!userStillExists) {
    return next(new APIErrorHandler("This user no longer exists.", 401));
  }


  // 4. Attach user to request
  req.user = decoded;

  // 5. Move to the next middleware or controller
  next();
});

export default authHandler;
