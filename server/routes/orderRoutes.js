

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { protectCustomer } = require("../middleware/customerAuthMiddleware"); // 👈 NEW import
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  getMyOrders, 
} = require("../controllers/orderController");

router.post("/", protectCustomer, createOrder);           // 👈 CHANGED — login required now
router.get("/my-orders", protectCustomer, getMyOrders);    // 👈 NEW route
router.get("/", protect, getOrders);                        // unchanged — admin only
router.get("/:id", protectCustomer, getOrderById);          // 👈 CHANGED — login required
router.put("/:id/status", protect, updateOrderStatus);      // unchanged — admin only

module.exports = router;