// const express = require("express");
// const router = express.Router();
// const { protect } = require("../middleware/authMiddleware");
// const {
//   createOrder,
//   getOrders,
//   getOrderById,
//   updateOrderStatus,
// } = require("../controllers/orderController");

// router.post("/", createOrder); // public — customer places order
// router.get("/", protect, getOrders); // admin only
// router.get("/:id", getOrderById);
// router.put("/:id/status", protect, updateOrderStatus); // admin only

// module.exports = router;

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { protectCustomer } = require("../middleware/customerAuthMiddleware"); // 👈 NEW import
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  getMyOrders, // 👈 NEW import
} = require("../controllers/orderController");

router.post("/", protectCustomer, createOrder);           // 👈 CHANGED — login required now
router.get("/my-orders", protectCustomer, getMyOrders);    // 👈 NEW route
router.get("/", protect, getOrders);                        // unchanged — admin only
router.get("/:id", protectCustomer, getOrderById);          // 👈 CHANGED — login required
router.put("/:id/status", protect, updateOrderStatus);      // unchanged — admin only

module.exports = router;