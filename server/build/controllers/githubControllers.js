"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRepos = exports.getUser = exports.getUsers = exports.github = void 0;
var url_1 = __importDefault(require("url"));
var axios_1 = __importDefault(require("axios"));
var Redis_1 = require("../cache/Redis");
var DEFAULT_EXPIRATION = 3600;
var _a = process.env, GITHUB_BASE_URL = _a.GITHUB_BASE_URL, GITHUB_TOKEN = _a.GITHUB_TOKEN;
var axiosOptions = {
    method: "GET",
    url: "".concat(GITHUB_BASE_URL),
    headers: {
        Accept: "application/json",
        Authorization: "token ".concat(GITHUB_TOKEN),
    },
};
// @desc      GET all response GITHUB API
// @route     /github
// @access    Public
var github = function (req, res) {
    try {
        axios_1.default.request(axiosOptions).then(function (response) {
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
var getUsers = function (req, res) {
    try {
        var searchOptions = __assign(__assign({}, axiosOptions), { url: "".concat(GITHUB_BASE_URL, "/search/users?").concat(req.params.login), params: __assign({ q: req.params.login }, url_1.default.parse(req.url, true).query) });
        axios_1.default.request(searchOptions).then(function (response) {
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
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var login_1, userOptions_1, client_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                login_1 = req.params.login;
                userOptions_1 = __assign(__assign({}, axiosOptions), { url: "".concat(GITHUB_BASE_URL, "/users/").concat(login_1), params: { q: login_1 } });
                return [4 /*yield*/, (0, Redis_1.initRedisClient)()];
            case 1:
                client_1 = _a.sent();
                client_1.get(login_1, function (error, data) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (error)
                            console.error(error);
                        if (data != null) {
                            console.log("Cache Hit..");
                            return [2 /*return*/, res.send(JSON.parse(data))];
                        }
                        else {
                            // Cache Miss...
                            console.log("Cache Miss..");
                            axios_1.default.request(userOptions_1).then(function (response) {
                                var data = response.data;
                                client_1.setex(login_1, DEFAULT_EXPIRATION, JSON.stringify(data));
                                return res.status(200).json(data);
                            });
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw new Error("Error!.. can't fetch a single user");
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
// @desc      GET user repositories
// @route     /github/users/:login/repos
// @access    Public
var getUserRepos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var login, repositoriesOptions;
    return __generator(this, function (_a) {
        try {
            login = req.params.login;
            repositoriesOptions = __assign(__assign({}, axiosOptions), { url: "".concat(GITHUB_BASE_URL, "/users/").concat(login, "/repos"), params: __assign({ q: login }, url_1.default.parse(req.url, true).query) });
            axios_1.default.request(repositoriesOptions).then(function (response) {
                var data = response.data;
                res.status(200).json(data);
            });
        }
        catch (error) {
            throw new Error("Error.. can't fetch user repositories");
        }
        return [2 /*return*/];
    });
}); };
exports.getUserRepos = getUserRepos;
