const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.isLoggedIn, ctrl.users.index);

module.exports = router;
