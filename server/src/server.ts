import express, { Express, Request, Response, NextFunction } from "express";
import { allowedOrigins } from "./allowedOrigins";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Middleware
dotenv.config();

const server: Express = express();

const PORT = process.env.PORT || 8000;

// ENABLE CORS
server.use(
  cors({
    origin: allowedOrigins,
  })
);

server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
  res.send("Helloo from Docker...!!");
});

server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));

const mongoURL: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rmp91sm.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL)
    .then(() => console.log(`Successfully connected to DB`))
    .catch((error) => {
      console.log(error);
      setTimeout(() => {
        connectWithRetry();
      }, 5000);
    });
};
connectWithRetry();
server.listen(PORT, () =>
  console.log(`server listening in PRODUCTION on port... ${PORT}`)
);
