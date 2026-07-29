const express = require("express");
const router = express.Router();
const { initiatePayment, checkPaymentStatus } = require("../controllers/paymentController");
const { protectCustomer } = require("../middleware/customerAuthMiddleware");


router.post("/initiate/:orderId", protectCustomer, initiatePayment);
router.get("/status/:orderId", protectCustomer, checkPaymentStatus);

module.exports = router;