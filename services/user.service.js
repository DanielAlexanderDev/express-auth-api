import { UserModel } from "../db/models/user.model.js";
import { hashPassword } from "../utils/password-hash.js";

const createUser = async (data) => {
  const newPass = await hashPassword(data.password);
  const newUser = await UserModel.create({
    ...data,
    password: newPass,
  });
  delete newUser._doc.password;
  return newUser;
};
const deleteUser = async (id) => {
  const deletedUser = await UserModel.findByIdAndDelete(id);
  return deletedUser;
};
const findByEmail = async (email) => {
  const userByEmail = await UserModel.findOne({ email: email });
  return userByEmail;
};
const getUsers = async () => {
  const users = await UserModel.find();
  return users;
};
const getUser = async (id) => {
  const user = await UserModel.findById(id);
  return user;
};
const updateUser = async (id, data) => {
  const updatedUser = await UserModel.findByIdAndUpdate(id, data);
  return updatedUser;
};

export { createUser, deleteUser, getUser, getUsers, updateUser, findByEmail };
