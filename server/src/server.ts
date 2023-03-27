import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
// Middleware
dotenv.config();

const server: Express = express();

const PORT = 8000;

// ENABLE CORS
server.use(cors({origin: '*'}));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));



server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));


mongoose.set("strictQuery", false);
const db = mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
  server.listen(PORT, () => console.log(`server listening to port... ${PORT}`));
});
