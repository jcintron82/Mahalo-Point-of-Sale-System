const items = require("../DBschemas/items");
let searchValue = '';

module.exports = {
  
    Post: (req, res) => {
      value = req.body[0];
      res.send({ message: value });
      searchValue = value;
      console.log(value)
    },
    getIndex: (req, res) => {
    //   checkIfLoggedIn()
      const dbQuery = items.find({ Item: searchValue }, (err, cursor) => {
        // console.log(cursor);
        res.json({ message: cursor });
        cursor.splice(0);
      });
    },
  };