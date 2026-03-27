import jwt from "jsonwebtoken";

const authHandler = async (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  console.log(authHeader);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "Access Denied. Invaild Credentials" });
  }
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided. Please login to continue",
    });
  }

  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedTokenInfo) {
      return res
        .status(200)
        .json({
          success: false,
          message: "Success. Access Granted",
          data: decodedTokenInfo,
        });
    }

    req.userInfo = decodedTokenInfo;
    next();
  } catch (error) {
    console.error(error.stack);
    return res
      .status(500)
      .json({
        success: false,
        message: "Access Denied. Something went wrong.",
      });
  }
};
