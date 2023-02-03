const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  product: String
})

mongoose.model('items', itemSchema)

module.exports = mongoose.model("items", itemSchema)