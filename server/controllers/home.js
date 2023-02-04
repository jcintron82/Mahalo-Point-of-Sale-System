const mongoose = require('mongoose');
const items = require("../DBschemas/items");


const arr = [];
let value = 'Blueberry Waffle';


module.exports = {
  Post: (req, res) => {
    console.log(res)
  },
  getIndex: (req, res) => {
    queryProduct();
    const dbQuery = items.find({'Item': value}, (err, cursor) => {
      cursor.forEach((dataset) => {
        arr.push(dataset);
        // arr.splice(0);
        // console.log(dataset.Item)
      });
      // addTotals(arr)
      
    })

    res.send({message:'Added to order...'})
  }
};
