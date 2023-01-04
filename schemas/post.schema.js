import Joi from "joi";

const author = Joi.string();
const content = Joi.string().min(50).max(250);

export const createPostSchema = Joi.object({
  author: author.required(),
  content: content.required(),
});
