const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs')
const session = require("express-session");
const bodyParser = require('body-parser');

const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const User = require("./DBschemas/employees");
// const postRoutes = require("./routes/posts");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
// app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// app.use(cookieParser('secretcode'));

// app.post('/', (req, res) => {
//   console.log(req.body)
// })
// app.get('/home', (req, res) => {
//   console.log(req.body)
// })




// passport.use(
//   new LocalStrategy((username, password, done) => {
//     User.findOne({ username: username }, (err, user) => {
//       if (err) { 
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       }
//       if (user.password !== password) {
//         return done(null, false, { message: "Incorrect password" });
//       }
//       return done(null, user);
//     });
//   })
// );
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/home",
//     failureRedirect: "/home"
//   })
// );
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);


//Server Running
if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    // console.log("Server is running on port" + process.env.PORT);
  });
}

