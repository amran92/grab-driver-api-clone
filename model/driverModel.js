const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 20,
    required: true,
  },
  location: {
    x: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
    y: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
  },
  willDriveDistance: {
    type: Number,
    min: 1,
    default: 1,
    required: true,
  },
  carCapacity: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Driver", schema);
