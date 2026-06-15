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

const getArticleBySlug = async (req, res) => {
    try {
        const article = await Article.findOne({ 
            where: {
                slug : req.params.slug
            },
            raw: true
        })
        res.status(200).json({article})
    } catch (err) {
        res.status(500).json({message: "Failed to fetch article"})
    }
}

module.exports = {
  getAllArticles,
  getArticleBySlug,
};