const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");
const Author = require("./author");

class Article extends Model {
  static associate(models) {
    this.belongsTo(models.Author, { foreignKey: "author_id" });
  }
}

Article.init(
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Author,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Article",
    tableName: "articles",
  },
);

module.exports = Article;
