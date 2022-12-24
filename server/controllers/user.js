/**
 * We can interact with mongoose in three diffirent ways:
 * [v] Callback
 * [v] Promises
 * [v] Async/await (Promises)
 */

const User = require("../models/User");

const { JWT_SECRET } = require("../configs");
const JWT = require("jsonwebtoken");

const encodedToken = (userID) => {
  return JWT.sign(
    {
      iss: "Hiep Nguyen",
      sub: userID,
      iat: new Date().getTime(),
    },
    JWT_SECRET,
    {
      expiresIn: "30m",
    }
  );
};

const authFacebook = async (req, res, next) => {
  try {
    const token = encodedToken(req.user._id);
    const User = req.user;
    return res.status(200).json({
      success: true,
      token,
      User,
      message: "Xác thực authFacebook thành công",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "Xác thực không thành công" });
  }
};

const authGoogle = async (req, res, next) => {
  try {
    const token = encodedToken(req.user._id);
    const User = req.user;
    return res.status(200).json({
      success: true,
      token,
      User,
      refreshToken,
      message: "Xác thực authGoogle thành công",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "Xác thực không thành công" });
  }
};

module.exports = {
  authGoogle,
  authFacebook,
};
