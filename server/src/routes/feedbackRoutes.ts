import express, { Router } from "express";
import { feedback } from "../controllers/feedbackController";

const router: Router = express.Router();

// GITHUB API
router.post("/", feedback);

module.exports = router;
