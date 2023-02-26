const employees = require("../DBschemas/employees");
let username = "";
let status = false;
module.exports = {
  postLogin: (req, res) => {
    username = req.body.username;
    status = true;
  },
  getLogin: (req, res) => {
    const dbQuery = employees.find({ username: username }, (err, cursor) => {
        console.log(cursor)
      statement: if (!cursor.length ) {
        res.send({ message: "Incorrect Username/Password!" });
        break statement;
      } else {
        res.send({
          message: "Welcome Back " + cursor[0].employeeName,
          code: "/manageroptions",
          employeeName: cursor[0].employeeName,
        //   lifetimeSales: cursor[0].lifetimeSales,
        //   employeeID: cursor[0]._id,
        });
      }
    });
  },
//   getAuthConfirmation: (req, res) => {
//     console.log('AUTH');
//     if (status === true) {
//         res.send ({status: 'Authorized'})
//     }
//     else{
//         res.send({status: 'Not Authorized'})
//     }
//   },
};
