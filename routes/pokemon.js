const express = require("express");
const router = express.Router();
const pokedex = require("./pokedex.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(pokedex);
});

module.exports = router;
