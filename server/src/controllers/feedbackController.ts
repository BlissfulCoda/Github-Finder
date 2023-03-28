import express, { Request, Response, Router } from "express";
import Feedback from "../models/Feedback";

const router: Router = express.Router();

// @desc    POST create new feedback
// @route   /feedback
// @access  Public
export const feedback = async (req: Request, res: Response) => {
  const d = new Date();
  const { body } = req;
  // body.created_at = d.toLocaleDateString("default", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  //   timeZone: "Europe/London",
  // });
  const newFeedback = new Feedback({
    feedback: body.feedback,
    created: (body.created_at = d.toLocaleDateString("default", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Europe/London",
    })),
  });

  const createFeedback = await newFeedback.save();
  res.json(createFeedback);
};

// @desc    GET feedback from database
// @route   /feedback
// @access  Public
export const getFeedback = async (req: Request, res: Response) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};
