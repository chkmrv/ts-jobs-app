const express = require("express");
const data = require("./data");
const router = express.Router();

// const jobs = data;

router.get("/", async (req, res) => {
  res.send(data);
});

module.exports = router;
