const sequelize = require("../database");
const Article = require("../models/article");

async function seedArticle() {
  await sequelize.authenticate();
  await Article.sync({ alter: true });

  const articles = [
    {
      name: "First mock article",
      slug: "first-mock-article",
      image: "https://merk.ee",
      body: "This is the first mock article.",
      published: new Date(),
      author_id: 1,
    },
    {
      name: "Second mock article",
      slug: "second-mock-article",
      image: "https://merk.ee",
      body: "This is the second mock article.",
      published: new Date(),
      author_id: 1,
    },
    {
      name: "Third mock article",
      slug: "third-mock-article",
      image: "https://merk.ee",
      body: "This is the third mock article.",
      published: null,
      author_id: 2,
    },
  ];

  for (const article of articles) {
    await Article.findOrCreate({
      where: { slug: article.slug },
      defaults: article,
    });
  }

  console.log(`Article table synced and seeded with ${articles.length} mock rows.`);
}

seedArticle()
  .catch((error) => {
    console.error("Article seeder failed:", error);
  })
  .finally(async () => {
    await sequelize.close();
  });
