import express from "express";
import upload from "../middleware/upload.pdf.js";
import { analyzeResume } from "../controllers/analyze.controller.js";

const router = express.Router();

router.post("/", upload.single("resume"), analyzeResume);

export default router;
