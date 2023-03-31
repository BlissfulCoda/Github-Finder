"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRepos = exports.getUser = exports.getUsers = exports.github = void 0;
const url_1 = __importDefault(require("url"));
const axios_1 = __importDefault(require("axios"));
const Redis_1 = require("../cache/Redis");
const DEFAULT_EXPIRATION = 3600;
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
const github = (req, res) => {
    try {
        axios_1.default.request(axiosOptions).then((response) => {
            res.status(200).json(response.data);
        });
    }
    catch (error) {
        throw new Error("Error occured");
    }
};
exports.github = github;
// @desc      GET users
// @route     /github/search/users?q=req.params
// @access    Public
const getUsers = (req, res) => {
    try {
        const searchOptions = Object.assign(Object.assign({}, axiosOptions), { url: `${GITHUB_BASE_URL}/search/users?${req.params.login}`, params: Object.assign({ q: req.params.login }, url_1.default.parse(req.url, true).query) });
        axios_1.default.request(searchOptions).then((response) => {
            res.status(200).json(response.data);
        });
    }
    catch (error) {
        throw new Error("FAILED!.. can't fetch users");
    }
};
exports.getUsers = getUsers;
// @desc      GET user 
// @route     /github/users/:login
// @access    Public
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { login } = req.params;
        const userOptions = Object.assign(Object.assign({}, axiosOptions), { url: `${GITHUB_BASE_URL}/users/${login}`, params: { q: login } });
        const client = yield (0, Redis_1.initRedisClient)();
        client.get(login, (error, data) => __awaiter(void 0, void 0, void 0, function* () {
            if (error)
                console.error(error);
            if (data != null) {
                console.log(`Cache Hit..`);
                return res.send(JSON.parse(data));
            }
            else {
                // Cache Miss...
                console.log(`Cache Miss..`);
                axios_1.default.request(userOptions).then((response) => {
                    const data = response.data;
                    client.setex(login, DEFAULT_EXPIRATION, JSON.stringify(data));
                    return res.status(200).json(data);
                });
            }
        }));
    }
    catch (error) {
        throw new Error("Error!.. can't fetch a single user");
    }
});
exports.getUser = getUser;
// @desc      GET user repositories
// @route     /github/users/:login/repos
// @access    Public
const getUserRepos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { login } = req.params;
        const repositoriesOptions = Object.assign(Object.assign({}, axiosOptions), { url: `${GITHUB_BASE_URL}/users/${login}/repos`, params: Object.assign({ q: login }, url_1.default.parse(req.url, true).query) });
        axios_1.default.request(repositoriesOptions).then((response) => {
            const data = response.data;
            res.status(200).json(data);
        });
    }
    catch (error) {
        throw new Error("Error.. can't fetch user repositories");
    }
});
exports.getUserRepos = getUserRepos;
