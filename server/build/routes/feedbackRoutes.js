"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var feedbackController_1 = require("../controllers/feedbackController");
var router = express_1.default.Router();
// GITHUB API
router.post("/", feedbackController_1.feedback);
router.get("/", feedbackController_1.getFeedback);
module.exports = router;
