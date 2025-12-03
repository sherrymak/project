const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  plateNumber: { type: String, required: true },
  route: { type: String }
});

module.exports = mongoose.model("Car", CarSchema);
