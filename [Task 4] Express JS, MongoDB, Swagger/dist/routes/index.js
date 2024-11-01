"use strict";
// Importing express
const router = require("express").Router();
const authRoutes = require("./auth");
const bookRoutes = require("./book");
router.use("/", authRoutes);
router.use("/books", bookRoutes);
module.exports = router;
