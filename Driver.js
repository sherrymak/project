const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" }
});

module.exports = mongoose.model("Driver", DriverSchema);
