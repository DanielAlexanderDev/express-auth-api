import Joi from "joi";

const name = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);

export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
});
