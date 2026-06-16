const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Author extends Model {
  static associate(models) {
    this.hasMany(models.Article, { foreignKey: "author_id" });
  }
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Author",
    tableName: "authors",
  },
);

module.exports = Author;
