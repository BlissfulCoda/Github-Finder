import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";
import { allowedOrigins } from "./allowedOrigins";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
//import WebSocket from "ws";

// Middleware
dotenv.config();

const PORT = process.env.PORT || 8000;

const server: Express = express();

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
  res.send("Hellooo from Github Finder App 😀");
});

server.use("/api/github", require("./routes/githubRoutes"));
server.use("/api/feedback", require("./routes/feedbackRoutes"));

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

// const wss = new WebSocket.Server({ server });

// wss.on("connection", (ws: WebSocket) => {
//   console.log("WebSocket connected");

//   ws.on("message", (message: string) => {
//     console.log("Received message:", message);
//     ws.send(`You said: ${message}`);
//   });

//   ws.on("close", () => {
//     console.log("WebSocket disconnected");
//   });
// });

connectWithRetry();
server.listen(PORT, () =>
  console.log(`server listening in PRODUCTION on port... ${PORT}`)
);
