import express from "express";
import config from "./config/config.js";
import { router } from "./routes/index.js";
import connectDB from "./db.js";
import cors from "cors";
import "dotenv/config";

const PORT = config.PORT;
const app = express();

app.use(express.json());
app.use(cors());

import "./utils/auth/index.js";

router(app);
connectDB();

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
