const mongoose = require('mongoose');
const items = require("../DBschemas/items");

const arr = [];

const addTotals = (arr) => {
  arr.forEach((item) => {
    console.log(item.Item)
  })

}

module.exports = {
  getIndex: (req, res) => {
    const dbQuery = items.find({}, (err, cursor) => {
      cursor.forEach((dataset) => {
        arr.push(dataset);
        // arr.splice(0)
        // console.log(dataset.Item)
      });
      addTotals(arr)
      
    })

    res.json({message:arr})
  }
};
