const mongoose = require("mongoose");

const dessertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Dessert name is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  available: {
    type: Boolean,
    default: true
  }
},
{timestamps: true }
);

module.exports = mongoose.model("Dessert", dessertSchema);