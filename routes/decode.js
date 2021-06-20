const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  const { token } = req.body;

  const decoded = jwt.decode(token);

  console.log(token);
  console.log(decoded);

  return res.send(decoded);
});

module.exports = router;
