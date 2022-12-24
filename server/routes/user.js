const express = require("express");
// const router = express.Router()
const route = require("express-promise-router")();

const passport = require("passport");
const UserController = require("../controllers/user");
const passportConfig = require("../middlewares/passport");
const { session } = require("passport");

route.post(
  "/auth/google",
  passport.authenticate("google-token", { session: false }),
  UserController.authGoogle
);
route
  .route("/auth/facebook")
  .post(
    passport.authenticate("facebook-token", { session: false }),
    UserController.authFacebook
  );

module.exports = route;
