const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  whereToBuy: {
    type: String, // Ensure this field exists and matches the form input
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
