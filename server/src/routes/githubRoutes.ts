import express, { Router } from "express";
import {
  github,
  getUsers,
  getUser,
  getUserRepos,
} from "../controllers/githubControllers";

const router: Router = express.Router();

// @route  GET api/users
router.get("/", github);

// @route   GET api/search/users/:login
router.get("/search/users/:login", getUsers);

// @route   GET api/users/:login
router.get("/users/:login", getUser);

// @route   GET api/users/:login/repo
router.get("/users/:login/repos", getUserRepos);

module.exports = router;
