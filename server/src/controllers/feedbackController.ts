import express, { Request, Response, Router } from "express";
import Feedback from "../models/Feedback";
import { randomCharacterIdx } from "../models/feedbackConfig";

// GET a random characater name
const randomeMarvelCharacter = () => {
  const randomCharacterGenerator = randomCharacterIdx();
  console.log(randomCharacterGenerator.next().done);
  return randomCharacterGenerator.next().value;
};

const router: Router = express.Router();

// @desc    POST create new feedback
// @route   /feedback
// @access  Public
export const feedback = async (req: Request, res: Response) => {
  const d = new Date();
  d.toISOString().replace(/T.*/, "").split("-").reverse().join("-");
  const { body } = req;
  const newFeedback = new Feedback({
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
};

// @desc    GET feedback from database
// @route   /feedback
// @access  Public
export const getFeedback = async (req: Request, res: Response) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};
