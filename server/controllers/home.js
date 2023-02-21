const items = require("../DBschemas/items");
let value = "";
module.exports = {
  
  Post: (req, res) => {
    value = req.body;
    res.send({ message: value });
  },
  getIndex: (req, res) => {
    const dbQuery = items.find({ Item: value }, (err, cursor) => {
      res.json({ message: cursor });
      cursor.splice(0);
    });
  },
};
