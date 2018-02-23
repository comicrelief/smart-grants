const express = require("express");
const router = express.Router();

// Route index page
router.get("/", function(req, res) {
  res.render("index");
});

// Add your routes here - above the module.exports line

router.get("/grant", function(req, res) {
  res.render("grant");
});

router.get("/grant/:question", function(req, res) {
  res.render(req.params.question);
});

module.exports = router;
