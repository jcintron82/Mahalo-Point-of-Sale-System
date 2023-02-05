const mongoose = require('mongoose');
const items = require("../DBschemas/items");
const express = require("express");
const app = express();

const itemHoldArr = [];
let value = 'Blueberry Waffle';


module.exports = {
  Post: (req, res) => { 
    itemHoldArr.push(req.body);
    let data = itemHoldArr[0];
    // console.log(data);
    value = data;
  },
  getIndex: (req, res) => {
    const dbQuery = items.find({'Item': value}, (err, cursor) => {
      cursor.forEach((dataset) => {
        itemHoldArr.push(dataset);
        // arr.splice(0);
        console.log(dataset.Item)
        console.log(dataset.Price);
        console.log(dataset.qty);
      });
      itemHoldArr.splice(0);    
    })
    res.send({message:'Added to order...'})
  }
};
