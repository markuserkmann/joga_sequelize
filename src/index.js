require("dotenv").config();
const PORT = process.env.PORT;


const express = require("express");
const app = express();


const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
})

sequelize.authenticate()
.then(() => {
    console.log("sql init success")
})
.catch((err) => {
    console.log("error", err)
})

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
