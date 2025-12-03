const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const driverRoutes = require("./routes/Driverroutes");
const carRoutes = require("./routes/CarRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route for frontend testing
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Routes
app.use("/drivers", driverRoutes);
app.use("/cars", carRoutes);
app.use("/payments", paymentRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
