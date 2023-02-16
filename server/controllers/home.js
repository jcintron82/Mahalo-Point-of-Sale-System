const items = require("../DBschemas/items");
let value = "";



function checkIfLoggedIn(req, res, next) {
console.log('hi')
console.log(req)
}
module.exports = {
  
  Post: (req, res) => {
    value = req.body;
    res.send({ message: value });
  },
  getIndex: (req, res) => {
    checkIfLoggedIn()
    const dbQuery = items.find({ Item: value }, (err, cursor) => {
      // console.log(cursor);
      res.json({ message: cursor });
      cursor.splice(0);
    });
  },
};
