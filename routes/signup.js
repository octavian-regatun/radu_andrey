const express = require("express");
const db = require("../db");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  const { prenume, nume, user, email, parola, statut } = req.body;

  const parolaHashed = await bcrypt.hash(parola, 10);

  console.log(parolaHashed);

  const newUser = await User.create({
    prenume,
    nume,
    user,
    email,
    parola: parolaHashed,
    statut,
  });

  newUser.parola = undefined;

  const token = jwt.sign({ newUser }, "ac");

  return res.send(token);
});

module.exports = router;
