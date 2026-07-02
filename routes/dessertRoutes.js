const express = require("express");
const router = express.Router();

const {
  createDessert, getDesserts
}
 = require("../controllers/dessertController");

router.route("/")
.get(getDesserts)
.post(createDessert);

module.exports = router;