import express, { Router } from "express";
import {
  github,
  searchUsers,
  singleUser,
  userRepos,
} from "../controllers/githubControllers";

const router: Router = express.Router();

// @route  GET api/users
router.get("/", github);

// @route   GET api/search/users/:id
router.get("/search/users/:id", searchUsers);

// @route   GET api/users/:id
router.get("/users/:id", singleUser);

// @route   GET api/users/:id/repo
router.get("/users/:id/repos", userRepos);

module.exports = router;
