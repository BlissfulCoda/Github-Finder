"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allowedOrigins_1 = require("./allowedOrigins");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Middleware
dotenv_1.default.config();
const server = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// "dev": "nodemon --watch \"src/**\" --ext \"ts, json\" --exec \"ts-node src/server.ts\" './dist/index.js' --watch './dist'"
// mongo: container_name: mongo;
// image: mongo;
// ports: -"27017:27017";
//
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
    res.send("Helloo from Docker!!!!");
});
server.use("/github", require("./routes/githubRoutes"));
server.use("/feedback", require("./routes/feedbackRoutes"));
// mongoose.set("strictQuery", false);
// const db = mongoose
//   .connect(
//     "mongodb+srv://githubfinder:RlMxJgnvzcBRJKN6@cluster0.rmp91sm.mongodb.net/?retryWrites=true&w=majority" ??
//       ""
//   )
//   .then(() => {
//     console.log(`Connected to DB`);
//   });
server.listen(PORT, () => console.log(`server listening in PRODUCTION on port... ${PORT}`));
