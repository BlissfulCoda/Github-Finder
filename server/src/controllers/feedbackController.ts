import express, { Request, Response, Router } from "express";
import Feedback from "../models/Feedback";

const router: Router = express.Router();

// @desc    Register New Feedback to database
// @route   /feedback
// @access  Public
export const feedback = async (req: Request, res: Response) => {
  const { body } = req;
  const newFeedback = new Feedback({
    feedback: body.feedback,
  });

  const createFeedback = await newFeedback.save();
  res.json(createFeedback);
};
