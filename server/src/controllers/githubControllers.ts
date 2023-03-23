import { Request, Response } from "express";
import url from "url";
import axios from "axios";

const { GITHUB_BASE_URL, GITHUB_TOKEN } = process.env;

const options = {
  method: "GET",
  url: `${GITHUB_BASE_URL}`,
  headers: {
    Accept: "application/json",
    Authorization: `token ${GITHUB_TOKEN}`,
  },
};

// @desc      GET all response GITHUB API
// @route     /github
// @access    Public
export const github = (req: Request, res: Response) => {
  try {
    axios.request(options).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("Error occured");
  }
};

// @desc      Get searched Users from Github API
// @route     /github/search/users?q=req.params
// @access    Public
export const searchUsers = (req: Request, res: Response) => {
  try {
    const searchOptions = {
      ...options,
      url: `${GITHUB_BASE_URL}/search/users?${req.params.login}`,
      params: { q: req.params.login, ...url.parse(req.url, true).query },
    };

    axios.request(options).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("FAILED!.. can't fetch users");
  }
};

// @desc      Get a single user from Github API
// @route     /github/search/users?q=req.params
// @access    Public
export const singleUser = async (req: Request, res: Response) => {
  try {
    const { login } = req.params;
    
    const userOptions = {
      ...options,
      url: `${GITHUB_BASE_URL}/users/${login}`,
      params: { q: login },
    };

    axios.request(userOptions).then((response) => {
      const data = response.data;
      res.status(200).json(data);
    });
  } catch (error) {
    throw new Error("FAILED!.. can't fetch a single user");
  }
};
