import express from "express";
import { createOrder, getClientOrders } from "../controllers/orderController.js";

const router = express.Router();

// Create new order
router.post("/", createOrder);

// Get orders of logged-in client
router.get("/:clientId", getClientOrders);

export default router;
