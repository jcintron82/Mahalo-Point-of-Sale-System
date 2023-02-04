const mongoose = require('mongoose');
const items = require("../DBschemas/items");

const arr = [];
const x = arr.toString();

module.exports = {
  getIndex: (req, res) => {
    const dbQuery = items.find({}, (err, cursor) => {
      cursor.forEach((dataset) => {
        arr.push(dataset);
      });
      console.log(arr);
    })

    res.send({message:arr})
  }
};
