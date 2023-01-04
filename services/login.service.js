import jwt from "jsonwebtoken";
import config from "../config/config.js";

const secret = config.SECRET;

const createToken = (data) => {
  const token = jwt.sign(data, secret);
  return token;
};

const validToken = (token) => {
  try {
    const isValid = jwt.verify(token, secret);
    console.log(isValid);
  } catch (error) {
    console.error(error);
  }
};

export { createToken };
