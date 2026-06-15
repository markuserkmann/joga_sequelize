require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const app = express();

const sequelize = require("./database");

sequelize
  .authenticate()
  .then(() => {
    console.log("sql init success");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
