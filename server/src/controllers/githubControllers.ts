import { Request, Response, NextFunction } from "express";
import url from "url";
import axios from "axios";
import { initRedisClient } from "../cache/Redis";
const DEFAULT_EXPIRATION: number = 3600;

const { GITHUB_BASE_URL, GITHUB_TOKEN } = process.env;


const axiosOptions = {
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
    axios.request(axiosOptions).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("Error occured");
  }
};

// @desc      GET users
// @route     /github/search/users?q=req.params
// @access    Public
export const getUsers = (req: Request, res: Response) => {
  try {
    const searchOptions = {
      ...axiosOptions,
      url: `${GITHUB_BASE_URL}/search/users?${req.params.login}`,
      params: { q: req.params.login, ...url.parse(req.url, true).query },
    };

    axios.request(searchOptions).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    throw new Error("FAILED!.. can't fetch users");
  }
};

// @desc      GET user 
// @route     /github/users/:login
// @access    Public
export const getUser = async (req: Request, res: Response) => {
  try {
    const { login } = req.params;

    const userOptions = {
      ...axiosOptions,
      url: `${GITHUB_BASE_URL}/users/${login}`,
      params: { q: login },
    };

    const client = await initRedisClient();

    client.get(login, async (error: any, data: any) => {
      if (error) console.error(error);
      if (data != null) {
        console.log(`Cache Hit..`);
        return res.send(JSON.parse(data));
      } else {
        // Cache Miss...
        console.log(`Cache Miss..`);

        axios.request(userOptions).then((response) => {
          const data = response.data;
          client.setex(login, DEFAULT_EXPIRATION, JSON.stringify(data));
          return res.status(200).json(data);
        });
      }
    });
  } catch (error) {
    throw new Error("Error!.. can't fetch a single user");
  }
};



// @desc      GET user repositories
// @route     /github/users/:login/repos
// @access    Public
export const getUserRepos = async (req: Request, res: Response) => {
  try {
    const { login } = req.params;

    const repositoriesOptions = {
      ...axiosOptions,
      url: `${GITHUB_BASE_URL}/users/${login}/repos`,
      params: { q: login, ...url.parse(req.url, true).query },
    };

    axios.request(repositoriesOptions).then((response) => {
      const data = response.data;
      res.status(200).json(data);
    });
  } catch (error) {
    throw new Error("Error.. can't fetch user repositories");
  }
};
