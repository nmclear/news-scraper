const db = require("./../models");

module.exports = app => {


    app.get("/", (req, res) => {
        db.Article.find({ saved: false})
            .populate("comment")
            .then(dbArticle => res.render('landing', {dbArticle}))
            .catch(err => res.json(err)
        );
    });

    app.get("/saved", (req, res) => {
        db.Article.find({ saved: true})
            .populate("comment")
            .then(dbArticle => res.render('saved', {dbArticle}))
            .catch(err => res.json(err)
        );
    });


}