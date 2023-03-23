import express, { Express, Request, Response} from "express";
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

server.get("/github", (req: Request, res: Response) => {
  res.send(`Github data from backend`);
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
