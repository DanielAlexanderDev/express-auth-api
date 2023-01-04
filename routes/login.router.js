import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      const { user } = req;
      const token = jwt.sign(
        {
          sub: user._id,
          name: user.name + user.lastName,
          email: user.email,
        },
        config.SECRET
      );
      delete user._doc.password;
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
