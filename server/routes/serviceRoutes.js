import express from "express";
import { addService, getServices } from "../controllers/serviceController.js";

const router = express.Router();

// Add Service (Admin Only)
router.post("/", addService);

// Get All Services
router.get("/", getServices);

export default router;
