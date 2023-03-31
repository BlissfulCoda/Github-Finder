"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
// Middleware
dotenv_1.default.config();
var server = (0, express_1.default)();
var PORT = 8000;
//   
// ENABLE CORS
server.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://github-finder-y715.onrender.com/",
    ],
}));
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.get("/", function (req, res) {
    res.send("Home");
});
server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));
mongoose_1.default.set("strictQuery", false);
var db = mongoose_1.default.connect((_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "").then(function () {
    server.listen(PORT, function () { return console.log("server listening to port... ".concat(PORT)); });
});
