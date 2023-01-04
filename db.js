import mongoose from "mongoose";
import config from "./config/config.js";

async function connectDB() {
  try {
    const db = await mongoose.connect(config.MONGODB_URI);
    console.log("connected to DB", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
export default connectDB;
