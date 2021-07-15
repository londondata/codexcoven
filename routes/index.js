// Home Route
const express = require("express");
const router = express.Router();
const homeCtrl = require("../controllers/index");

router.get("/", homeCtrl.home);

module.exports = router;
