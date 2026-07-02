const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    fabric: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String },
    stock: { type: Number, default: 10 },
    images: [{ type: String }], // Cloudinary URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);