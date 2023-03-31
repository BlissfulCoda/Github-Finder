import express, { Express } from "express";
import path from "path";

import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
// Middleware
dotenv.config();

const server: Express = express();

const PORT = 8000;

// ENABLE CORS
server.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4173", "https://github-finder.onrender.com"],
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send("Home");
});

server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));

mongoose.set("strictQuery", false);
const db = mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
  server.listen(PORT, () => console.log(`server listening to port... ${PORT}`));
});
