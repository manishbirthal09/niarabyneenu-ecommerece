const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const productRoutes = require("./routes/productRoutes");
const customerAuthRoutes = require("./routes/customerAuthRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cors({
  origin: [
     "https://niarabyneenu.com",
    "https://www.niarabyneenu.com",
    "https://niarabyneenu-ecommerce.vercel.app",
    "https://niarabyneenu-ecommerece.vercel.app",
    "http://localhost:5173",
  ],
  credentials: true,
}));
app.use(express.json());

app.use("/api/products", productRoutes);

app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/customer/auth", customerAuthRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/payment", paymentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));