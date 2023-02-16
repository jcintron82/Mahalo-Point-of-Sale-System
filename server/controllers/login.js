const employees = require("../DBschemas/employees");
const passport = require("passport");

let username = "";
let password = "";
let status = false;
module.exports = {
  postLogin: (req, res) => {
    username = req.body.username;
    password = req.body.password;
    status = true;
    console.log(username);
    console.log(password);
    // value = req.body;
    // res.send({ message: value });
    // console.log(value);
    // passport.authenticate('local', (err,user,info) => {
    //     if (err) throw err;
    //     if (!user) res.send('No user');
    //     else {
    //         req.login(user, err => {
    //             if (err) throw err;
    //             res.send('Successfully authenticated');
    //             // console.log(req.user)
    //         })
    //     }
    // })
  },
  getLogin: (req, res) => {
    console.log("HIIIIII");
    const dbQuery = employees.find({ username: username }, (err, cursor) => {
      // console.log('password is' + cursor[0].password);
      statement: if (!cursor.length) {
        res.send({ message: "Incorrect Username/Password!" });
        console.log("Incorrect Username/Password!");
        break statement;
      } else if (password != cursor[0].password) {
        res.send({ message: "Incorrect Username/Password!" });
        console.log("Incorrect Username/Password!");
      } else {
        console.log("Welcome back " + cursor[0].employeeName);
        res.send({
          message: "Welcome Back " + cursor[0].employeeName,
          code: "/home",
          employeeName: cursor[0].employeeName,
          lifetimeSales: cursor[0].lifetimeSales,
        });
      }
    });
  },
  getAuthConfirmation: (req, res) => {
    // checkIfLoggedIn();
    // const dbQuery = items.find({ Item: value }, (err, cursor) => {
    //   // console.log(cursor);
    //   res.json({ message: cursor });
    //   cursor.splice(0);
    // });
    console.log('AUTH');
    if (status === true) {
        res.send ({status: 'Authorized'})
    }
    else{
        res.send({status: 'Not Authorized'})
    }
  },
};
