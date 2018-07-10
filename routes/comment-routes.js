const db = require("./../models");

module.exports = function(app){

    app.get("/articles/:id", function(req, res) {

        db.Article.findOne({ _id: req.params.id })

        .populate("comment")
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err));
    });
    
    app.post("/articles/:id", function(req, res) {

        db.Comment.create(req.body)
        .then(dbComment => db.Article.findOneAndUpdate(
            { _id: req.params.id}, {comment: dbComment._id}, {new: true})
        )
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err));

    });




}