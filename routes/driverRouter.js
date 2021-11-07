const router = require("express").Router();
const driverCtrl = require("../controllers/driverCtrl");

router.route("/").post(driverCtrl.getNearestAvailableDriver);

module.exports = router;
