import { Request, Response } from "express";
import axios from "axios";

const { MARVEL_API_KEY, MARVEL_HASH } = process.env;

// @desc    GET Marvel photos
// @route   /unsplash
// @access  Public
export const marvel = async (req: Request, res: Response) => {
  try {
    const unsplashOptions = {
      method: "GET",
      url: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${MARVEL_API_KEY}&hash=${MARVEL_HASH}`,
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
