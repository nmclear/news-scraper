const db = require("./../models");

module.exports = function(app){

    app.get("/articles", function(req, res) {
        db.Article.find({}, function(error, data) {
            if (error) {
                console.log(error);
                return error;
            } else {

                const articleArr = [];

                for(let i = 0; i < data.length; i++){
                    const article = {
                        id: data[i]._id,
                        headline: data[i].headline,
                        link: data[i].link
                    };
                    articleArr.push(article);
                }
                res.render('landing', {articleArr})
            }
        })
    });

}