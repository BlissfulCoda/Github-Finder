import express, { Express} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
// Middleware
dotenv.config()

const server: Express = express();

const PORT = 5000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// ENABLE CORS
server.use(cors());

server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


mongoose.set("strictQuery", false);
const db = mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
  server.listen(PORT, () => console.log(`server listening to port... ${PORT}`));
});
