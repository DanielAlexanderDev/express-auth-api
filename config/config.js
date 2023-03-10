import * as dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT | 3000,
  SECRET: process.env.JWT_SECRET,
  MONGODB_URI: process.env.MONGODB_URI,
};

export default config;
