"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// Middleware
dotenv_1.default.config();
const server = (0, express_1.default)();
const PORT = 8000;
// "dev": "nodemon --watch \"src/**\" --ext \"ts, json\" --exec \"ts-node src/server.ts\" './dist/index.js' --watch './dist'"
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
server.get("/", (req, res) => {
    res.send("Home");
});
server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));
mongoose_1.default.set("strictQuery", false);
const db = mongoose_1.default.connect((_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "").then(() => {
    server.listen(PORT, () => console.log(`server listening to port... ${PORT}`));
});
