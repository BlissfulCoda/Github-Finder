import express from "express";
import { Router } from "express";
import { unsplash } from "../controllers/unsplashController";

const router: Router = express.Router();

router.get("/", unsplash);

module.exports = router;
