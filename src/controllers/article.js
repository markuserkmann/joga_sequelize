const Article = require("../models/article");

const getAllArticles = async (req, res) => {
  try {
    console.log("here")
    const articles = await Article.findAll({ raw: true });
    res.status(200).json({articles});
  } catch (err) {
    console.error("Failed to fetch articles:", err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
};

module.exports = {
  getAllArticles,
};