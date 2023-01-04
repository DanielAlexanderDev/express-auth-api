import { PostModel } from "../db/models/posts.model.js";

const createPost = async (authorId, data) => {
  const newPost = await PostModel.create(authorId, data);
  return newPost;
};
const deletePost = async (id) => {
  const deletedUser = await PostModel.findByIdAndDelete(id);
  return deletedUser;
};
const findByAuthor = async (authorId) => {
  const userByAuthorId = await PostModel.findOne({ _id: authorId });
  return userByAuthorId;
};
const getPosts = async () => {
  const posts = await PostModel.find();
  return posts;
};
const getPost = async (id) => {
  const post = await PostModel.findById(id);
  return post;
};

export { createPost, deletePost, findByAuthor, getPost, getPosts };
