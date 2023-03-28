import express from "express";
import { Router } from "express";
import { marvel } from "../controllers/marvelController";

const router: Router = express.Router();

router.get("/", marvel);

module.exports = router;
