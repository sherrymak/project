const express = require("express");
const Car = require("../models/Car");
const router = express.Router();

// Add a car
router.post("/", async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all cars
router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

module.exports = router;
