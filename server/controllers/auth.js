module.exports = {
  getAuthConfirmation: (req, res) => {
    checkIfLoggedIn()
    const dbQuery = items.find({ Item: value }, (err, cursor) => {
      // console.log(cursor);
      res.json({ message: cursor });
      cursor.splice(0);
    });
  },
};