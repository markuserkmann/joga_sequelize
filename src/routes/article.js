
const express = require("express");
const router = express.Router()

const articleController = require("../controllers/article")

router.get("/articles", articleController.getAllArticles)

module.exports = router