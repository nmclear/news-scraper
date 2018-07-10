const cheerio = require("cheerio");
const request = require("request");
// const mongoose = require("mongoose");
const db = require("./../models");

module.exports = app => {

    app.get("/api/all", (req, res) => {
        db.Article.find({}, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                res.json(data);
            }
        })
    });
    
    app.get("/scraper", (req, res) => {
        request("https://grow.acorns.com/news/", (error, response, html) => {
            const $ = cheerio.load(html);
        
            $("h3.article-description-cell").each(function(i, element) {
                const result = {};
    
                result.headline = $(this).children().text();
                result.link = "https://grow.acorns.com" + $(this).parent().attr("href");
    
                db.Article.create(result).then(dbArticle => dbArticle)
                .catch(err => res.json(err));
            });
        });
        res.send("Added New Articles. Visit /api/all to see data");
    });

}