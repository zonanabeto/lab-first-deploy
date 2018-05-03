const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyDaqX7mB5Gy5FccKIsGqGNkU8AznQJQk-8" });
});

module.exports = siteController;
