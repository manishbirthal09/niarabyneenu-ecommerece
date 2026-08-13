const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
  required: true,
},
   
    description: { type: String },
    stock: { type: Number, default: 10 },
    images: [{ type: String }], 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);