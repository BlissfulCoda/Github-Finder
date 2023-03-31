"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedbackController_1 = require("../controllers/feedbackController");
const router = express_1.default.Router();
// GITHUB API
router.post("/", feedbackController_1.feedback);
router.get("/", feedbackController_1.getFeedback);
module.exports = router;
