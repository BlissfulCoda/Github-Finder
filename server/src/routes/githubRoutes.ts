import express, { Router } from "express";
import {
  github,
  
} from "../controllers/githubControllers";

const router: Router = express.Router();

// @desc   Base URL GITHUB API
router.get("/", github);

module.exports = router;
