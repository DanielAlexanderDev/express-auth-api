import express from "express";
import {
  createPost,
  deletePost,
  findByAuthor,
  getPost,
  getPosts,
} from "../services/post.service.js";
import { createPostSchema } from "../schemas/post.schema.js";
import { validatorHandler } from "../middlewares/validatorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post(
  "/",
  validatorHandler(createPostSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newPost = await createPost(body);
      res.status(201).json(newPost);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePost(id);
    res.json(deletedPost).status(200);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
