const Dessert = require("../models/dessertModel");

// CREATE dessert
exports.createDessert = async (req, res) => {
  try {
    const dessert = await Dessert.create(req.body);
    res.status(201).json({
      success: true,
      data: dessert
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// READ all desserts
exports.getDesserts = async (req, res) => {
  try {
    const desserts = await Dessert.find();
    res.status(200).json({
      success: true,
      count: desserts.length,
      data: desserts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};