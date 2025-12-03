const express = require("express");
const Driver = require("../models/Driver");
const router = express.Router();

// Add a driver
router.post("/", async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.json(driver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all drivers
router.get("/", async (req, res) => {
  const drivers = await Driver.find().populate("carId");
  res.json(drivers);
});

module.exports = router;
