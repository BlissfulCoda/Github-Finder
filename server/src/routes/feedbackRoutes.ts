import express, { Router } from "express";
import { feedback, getFeedback } from "../controllers/feedbackController";

const router: Router = express.Router();

// GITHUB API
router.post("/", feedback);

router.get("/", getFeedback);

module.exports = router;
