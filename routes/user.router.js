import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../services/user.service.js";
import { createUserSchema } from "../schemas/user.schema.js";
import { validatorHandler } from "../middlewares/validatorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.json(users).status(200);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newUser = await createUser(body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedUser = await updateUser(id, body);
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(202).json({ deleted_user: deletedUser });
  } catch (error) {
    res.status(404).json(error.message);
  }
});

export default router;
