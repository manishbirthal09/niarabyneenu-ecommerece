const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

router.post("/", createOrder); // public — customer places order
router.get("/", protect, getOrders); // admin only
router.get("/:id", getOrderById);
router.put("/:id/status", protect, updateOrderStatus); // admin only

module.exports = router;