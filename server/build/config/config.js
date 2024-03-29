"use strict";
var _a, _b;
var _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_PASSWORD = exports.SECRET_SESSION = exports.REDIS_HOST = exports.REDIS_PORT = exports.REDIS_URL = exports.MONGO_DATABASE = exports.MONGO_PASSWORD = exports.MONGO_USER = exports.MONGO_PORT = exports.MONGO_IP = void 0;
const MONGO_IP = ((_a = (_c = process.env).MONGO_IP) !== null && _a !== void 0 ? _a : (_c.MONGO_IP = "mongo"));
exports.MONGO_IP = MONGO_IP;
const MONGO_PORT = process.env.MONGO_PORT || 27017;
exports.MONGO_PORT = MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
exports.MONGO_USER = MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
exports.MONGO_PASSWORD = MONGO_PASSWORD;
const MONGO_DATABASE = process.env.MONGO_DATABSE;
exports.MONGO_DATABASE = MONGO_DATABASE;
const REDIS_URL = ((_b = (_d = process.env).REDIS_URL) !== null && _b !== void 0 ? _b : (_d.REDIS_URL = "redis"));
exports.REDIS_URL = REDIS_URL;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
exports.REDIS_PORT = REDIS_PORT;
const REDIS_HOST = (process.env.REDIS_HOST || "redis");
exports.REDIS_HOST = REDIS_HOST;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
exports.REDIS_PASSWORD = REDIS_PASSWORD;
const SECRET_SESSION = process.env.SECRET_SESSION || 6379;
exports.SECRET_SESSION = SECRET_SESSION;
