const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  Item: String,
  Price: Decimal128,
  qty: Number
})

mongoose.model('items', itemSchema)

module.exports = mongoose.model("items", itemSchema)