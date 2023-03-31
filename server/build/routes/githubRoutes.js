"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const githubControllers_1 = require("../controllers/githubControllers");
const router = express_1.default.Router();
// @route  GET api/users
router.get("/", githubControllers_1.github);
// @route   GET api/search/users/:login
router.get("/search/users/:login", githubControllers_1.getUsers);
// @route   GET api/users/:login
router.get("/users/:login", githubControllers_1.getUser);
// @route   GET api/users/:login/repo
router.get("/users/:login/repos", githubControllers_1.getUserRepos);
module.exports = router;
