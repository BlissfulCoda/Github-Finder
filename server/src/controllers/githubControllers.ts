import { Request, Response } from "express";
import axios from "axios";

const { GITHUB_BASE_URL, GITHUB_TOKEN } = process.env;

// @desc      GET all response GITHUB API
// @route     /github
// @access    Public
export const github = (req: Request, res: Response) => {
  try {
    const options = {
      method: "GET",
      url: `${GITHUB_BASE_URL}`,
      headers: {
        Accept: "application/json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    };

    axios.request(options).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("Error occured");
  }
};