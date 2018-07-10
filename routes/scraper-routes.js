const cheerio = require("cheerio");
const request = require("request");
// const mongoose = require("mongoose");
const db = require("./../models");

module.exports = function(app){

    app.get("/api/all", function(req, res) {
        db.Article.find({}, function(error, data) {
            if (error) {
                console.log(error);
            } else {
                res.json(data);
            }
        })
    });
    
    app.get("/scraper", function(req, res) {
        request("https://grow.acorns.com/news/", function(error, response, html) {
            const $ = cheerio.load(html);
        
            $("h3.article-description-cell").each(function(i, element) {
                const result = {};
    
                result.headline = $(this).children().text();
                result.link = "https://grow.acorns.com" + $(this).parent().attr("href");
    
                db.Article.create(result)
                .then(function(dbArticle){
                    console.log(dbArticle)
                    return dbArticle;
                })
                .catch(function(err){
                    return res.json(err)
                })
            });
        });
        res.send("Added New Articles. Visit /all to see data");
    });

}