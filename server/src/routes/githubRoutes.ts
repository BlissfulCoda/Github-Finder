import express, { Router } from "express";
import { github, searchUsers } from "../controllers/githubControllers";

const router: Router = express.Router();

// @route  GET api/users
// @desc   GITHUB API
router.get("/", github);

// @desc    Get a single User search result
router.get("/search/users/:login", searchUsers);

module.exports = router;
