const sequelize = require("../database");
const { Article, Author } = require("../models");

async function seedArticle() {
  await sequelize.authenticate();
  await Author.sync({ alter: true });

  const authors = [
    {
      id: 1,
      name: "Mia Thompson",
      image: "https://merk.ee",
    },
    {
      id: 2,
      name: "Oliver Brooks",
      image: "https://merk.ee",
    },
    {
      id: 3,
      name: "Sofia Carter",
      image: "https://merk.ee",
    },
  ];

  for (const author of authors) {
    await Author.findOrCreate({
      where: { id: author.id },
      defaults: author,
    });
  }

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
      author_id: 3,
    },
  ];

  for (const article of articles) {
    await Article.findOrCreate({
      where: { slug: article.slug },
      defaults: article,
    });
  }

}

seedArticle()
  .catch((error) => {
    console.error("Article seeder failed:", error);
  })
  .finally(async () => {
    await sequelize.close();
  });
