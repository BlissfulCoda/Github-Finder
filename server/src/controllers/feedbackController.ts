import express, { Request, Response, Router } from "express";
import Feedback from "../models/Feedback";

const router: Router = express.Router();

// export const time = (date: number) => {
//   let currentDate = new Date().getTime();
//   let seconds = Math.floor((currentDate - date) / 1000);

//   let interval = seconds / 31536000;

//   switch(interval: number) {

//     return Math.floor(seconds) + "min";
//   }
// }

function timeSince(date: Date) {
  let seconds = Math.floor((new Date().getTime() - Number(date)) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// @desc    POST create new feedback
// @route   /feedback
// @access  Public
export const feedback = async (req: Request, res: Response) => {
  const d = new Date();
  d.toISOString().replace(/T.*/, "").split("-").reverse().join("-");
  const { body } = req;
  // body.created_at = d.toLocaleDateString("default", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  //   timeZone: "Europe/London",
  // });

  let aDay = 24 * 60 * 60 * 1000;
  console.log(timeSince(new Date(Date.now() - aDay)));

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
