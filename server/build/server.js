"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allowedOrigins_1 = require("./allowedOrigins");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
// Middleware
dotenv_1.default.config();
const server = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// ENABLE CORS
server.use((0, cors_1.default)({
    origin: allowedOrigins_1.allowedOrigins,
}));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.get("/", (req, res) => {
    res.send("Hello 😃. Welcome to the Github Finder App");
});
server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));
const mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rmp91sm.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const connectWithRetry = () => {
    mongoose_1.default
        .connect(mongoURL)
        .then(() => console.log(`Successfully connected to DB`))
        .catch((error) => {
        console.log(error);
        setTimeout(() => {
            connectWithRetry();
        }, 5000);
    });
};
connectWithRetry();
server.listen(PORT, () => console.log(`server listening in PRODUCTION on port... ${PORT}`));
