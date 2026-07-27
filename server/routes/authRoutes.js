// import express from "express";
// const router = express.Router();
// import { login } from "../controllers/authController.js";

// router.post("/login", login);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;