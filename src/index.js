require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});