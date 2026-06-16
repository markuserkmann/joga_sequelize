const sequelize = require("../database");
const Article = require("./article");
const Author = require("./author");

const models = {
  sequelize,
  Article,
  Author,
};

Object.values(models).forEach((model) => {
  if (model && typeof model.associate === "function") {
    model.associate(models);
  }
});

module.exports = models;
