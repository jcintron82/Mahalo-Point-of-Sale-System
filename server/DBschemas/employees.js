const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  username: Number,
  password: String,
  employeeName: String,
  lifetimeSales: Decimal128,
  dailySales: Decimal128
})

mongoose.model('employees', employeeSchema)

module.exports = mongoose.model("employees", employeeSchema)