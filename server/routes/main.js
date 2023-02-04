const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.post("/", homeController.Post);


module.exports = router;
