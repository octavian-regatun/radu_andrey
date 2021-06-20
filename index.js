require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./db");

const signup = require("./routes/signup");
const login = require("./routes/login");
const decode = require("./routes/decode");


const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/decode", decode);

app.listen(PORT, () => {
  db.sync({
    force: true,
  });

  console.log(`Example app listening at http://localhost:${PORT}`);
});
