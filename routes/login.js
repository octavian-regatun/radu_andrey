const express = require("express");
const db = require("../db");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  const { user, parola } = req.body;

  const foundUser = await User.findOne({ user });

  if (await bcrypt.compare(parola, foundUser.parola)) {
    foundUser.parola = undefined;

    const token = jwt.sign(foundUser.get({ plain: true }), "ac");

    return res.send(token);
  }

  return res.sendStatus(404);
});

module.exports = router;
