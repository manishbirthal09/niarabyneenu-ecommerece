const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Admin = require("../models/Admin");

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "admin@niarabyneenu.com"; // change as needed
  const password = "ChangeThisPassword123"; // change as needed

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash(password, 10);
  await Admin.create({ email, password: hashed });
  console.log("Admin created:", email);
  process.exit();
};

run();