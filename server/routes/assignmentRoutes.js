import express from "express";
import { assignWork, getDeveloperAssignments } from "../controllers/assignmentController.js";

const router = express.Router();

// Assign order to developer
router.post("/", assignWork);

// Get all assignments of a developer
router.get("/:developerId", getDeveloperAssignments);

export default router;
