require("dotenv").config();

const express = require("express");
const sequelize = require("./database");

const app = express();
const PORT = process.env.PORT;

const articleRoutes = require("./routes/article");


app.use(express.json());
app.use("/", articleRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("SQL connection successful");

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("SQL connection failed:", err);
  }
}

startServer();