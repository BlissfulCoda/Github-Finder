import express, { Request, Response, NextFunction, Router } from "express";
import FeedbackModel from "../models/feedback";
import { randomeMarvelCharacter } from "../models/feedbackConfig";

const router: Router = express.Router();

// @desc    POST create new feedback
// @route   /feedback
// @access  Public
export const feedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const d = new Date();
    d.toISOString().replace(/T.*/, "").split("-").reverse().join("-");
    const { body } = req;
    // 
    const newFeedback = new FeedbackModel({
      feedback: body.feedback,
      created: (body.created_at = d
        .toLocaleDateString("default", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "numeric",
          timeZone: "Europe/London",
        })
        .replace(/\//g, "-")),
      characterName: randomeMarvelCharacter(),
    });
    //

    const createFeedback = await newFeedback.save();
    res.json(createFeedback);
  } catch (error) {
    console.log(error);
  }
};

// @desc    GET feedback from database
// @route   /feedback
// @access  Public
export const getFeedback = async (req: Request, res: Response) => {
  const feedbacks = await FeedbackModel.find();
  res.json(feedbacks);
};
