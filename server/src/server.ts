import express, { Express} from "express";
import dotenv from 'dotenv'
import cors from 'cors'

// Middleware
dotenv.config()

const server: Express = express();

const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// ENABLE CORS
server.use(cors());

server.use("/github", require("./routes/githubRoutes"));


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
