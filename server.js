const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const driverRouter = require("./routes/driverRouter");
const populate = require("./populate");
const app = express();

app.use(express.json());

app.use("/api/search/drivers", driverRouter);

const URI = process.env.MONGO_URI;

// Connecting to MongoDB here because this is a test API
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB.");
  }
);

populate();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
