const models = require("../models");
const getAllArticles = async (req, res) => {
  try {
    console.log("here")
    const articles = await models.Article.findAll({ raw: true });
    res.status(200).json({articles});
  } catch (err) {
    console.error("Failed to fetch articles:", err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
};

const getArticleBySlug = async (req, res) => {
    try {
        const article = await models.Article.findOne({ 
            where: {
                slug : req.params.slug
            },
            include: models.Author,
        })
        res.status(200).json({article})
    } catch (err) {
        console.error("Failed to fetch article:", err);
        res.status(500).json({message: "Failed to fetch article"})
    }
}

module.exports = {
  getAllArticles,
  getArticleBySlug,
};
