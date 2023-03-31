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
exports.getFeedback = exports.feedback = void 0;
const express_1 = __importDefault(require("express"));
const feedback_1 = __importDefault(require("../models/feedback"));
const feedbackConfig_1 = require("../models/feedbackConfig");
const router = express_1.default.Router();
// @desc    POST create new feedback
// @route   /feedback
// @access  Public
const feedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const d = new Date();
        d.toISOString().replace(/T.*/, "").split("-").reverse().join("-");
        const { body } = req;
        const newFeedback = new feedback_1.default({
            feedback: body.feedback,
            created: (body.created_at = d
                .toLocaleDateString("default", {
                month: "long",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "numeric",
                timeZone: "Europe/London",
            })
                .replace(/\//g, "-")),
            characterName: (0, feedbackConfig_1.randomeMarvelCharacter)(),
        });
        //
        const createFeedback = yield newFeedback.save();
        res.json(createFeedback);
    }
    catch (error) {
        console.log(error);
    }
});
exports.feedback = feedback;
// @desc    GET feedback from database
// @route   /feedback
// @access  Public
const getFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const feedbacks = yield feedback_1.default.find();
    res.json(feedbacks);
});
exports.getFeedback = getFeedback;
