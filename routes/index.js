import express from "express";
import loginRouter from "./login.router.js";
import userRouter from "./user.router.js";
import postRouter from "./posts.router.js";

export const router = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/login", loginRouter);
  router.use("/users", userRouter);
  router.use("/posts", postRouter);
};
