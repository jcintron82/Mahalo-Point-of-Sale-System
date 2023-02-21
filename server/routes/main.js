const express = require("express");
const router = express.Router();
router.use(express.json())// add this line

const authController = require("../controllers/login");
const homeController = require("../controllers/home");
const loginController = require("../controllers/login");
const customizedPlates = require("../controllers/customizedplates");
const updateMetrics = require("../controllers/servermetrics");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/waffles", homeController.getIndex);
router.post("/waffles", homeController.Post);

router.get("/login", loginController.getLogin);
router.post("/login", loginController.postLogin);

router.get("/confirmauth", authController.getAuthConfirmation);

router.get("/customizedplates",  customizedPlates.getIndex);
router.post("/customizedplates",  customizedPlates.Post);

router.post("/updatemetrics",  updateMetrics.updateMetrics);
module.exports = router;
