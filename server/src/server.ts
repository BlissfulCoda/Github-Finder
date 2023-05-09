import express, { Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { corsOptions } from "./allowedOrigins";
// Middleware
dotenv.config();

const PORT = Number(process.env.PORT || 8000);

const server: Express = express();

// ENABLE CORS
server.use(cors(corsOptions));
server.enable("trust proxy");
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

server.get("/api", (req, res) => {
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

connectWithRetry();
server.listen(PORT, "0.0.0.0", () =>
  console.log(`server listening in DEV on port...!! ${PORT}`)
);
