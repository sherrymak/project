const express = require("express");
const Payment = require("../models/payment");
const router = express.Router();

// ============================
//  ADD PAYMENT
// ============================
router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ============================
//  GET ALL PAYMENTS
// ============================
router.get("/", async (req, res) => {
  const payments = await Payment.find().populate("driverId");
  res.json(payments);
});

// ============================
//  STK PUSH (M-PESA)
// ============================
router.post("/stk", async (req, res) => {
  const { phone, amount } = req.body;

  // Example only — replace with Safaricom M-PESA code later
  res.json({
    message: "STK push initiated",
    phone,
    amount
  });
});

// Export the router
module.exports = router;
