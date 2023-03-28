import { Request, Response } from "express";
import axios from "axios";

const { UNSPLASH_URL, UNSPLASH_ACCESS_KEY } = process.env;

// @desc    GET unsplash photos
// @route   /unsplash
// @access  Public
export const unsplash = async (req: Request, res: Response) => {
  try {
    const unsplashOptions = {
      method: "GET",
      url: `${UNSPLASH_URL}/photos?client_id=${UNSPLASH_ACCESS_KEY}`,
      headers: {
        Accept: "application/json",
      },
    };
    axios.request(unsplashOptions).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("Error occured");
  }
};
