const cheerio = require("cheerio");

const db = require("./models");


app.get("/all", function(req, res) {
    db.Article.find({}, function(error, data) {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
      }
    })
});
  
app.get("/new", function(req, res) {
  
    request("https://grow.acorns.com/", function(error, response, html) {
        const $ = cheerio.load(html);
    
        $("h3.article-description-cell").each(function(i, element) {
    
            const link = $(element).parent().attr("href");
            const summary;
            const title = $(element).children().text();
    
            db.Article.insert({
                title: title,
                summary: summary,
                link: "https://grow.acorns.com" + link
            })
        });
    });
  
    res.send("Added New Articles. Visit /all to see data");
});