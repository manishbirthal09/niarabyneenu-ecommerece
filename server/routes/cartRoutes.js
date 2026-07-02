const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../controllers/cartController");

router.get("/:cartId", getCart);
router.post("/:cartId/add", addToCart);
router.put("/:cartId/update", updateCartItem);
router.delete("/:cartId/remove/:productId", removeFromCart);

module.exports = router;