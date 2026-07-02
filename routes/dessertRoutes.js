const express = require("express");
const router = express.Router();

const {
  createDessert, getDesserts, updateDessert, deleteDessert
}
 = require("../controllers/dessertController");

router.route("/")
.get(getDesserts)
.post(createDessert);

router.route("/:id")
  .put(updateDessert)
  .delete(deleteDessert);

module.exports = router;