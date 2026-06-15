const sequelize = require("../database");
const Article = require("../models/article");

async function seedArticle() {
  await sequelize.authenticate();
  await Article.sync({ alter: true });

  await Article.findOrCreate({
    where: { slug: "first-mock-article" },
    defaults: {
      name: "Mock articel",
      slug: "first-mock-article",
      image: "https://merk.ee",
      body: "Tet.",
      published: new Date(),
      author_id: 1,
    },
  });

  console.log("Article table synced and seeded with 1 mock row.");
}

seedArticle()
  .catch((error) => {
    console.error("Article seeder failed:", error);
  })
  .finally(async () => {
    await sequelize.close();
  });
