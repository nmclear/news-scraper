const db = require("./../models");

module.exports = app => {

    app.get("/comment/:id", (req, res) => {
        console.log('get comment route')
        db.Article.findOne({ _id: req.params.id }).populate("comment")
        .then(result => 
            {
                // console.log(result);
                const comment = result.comment;
                console.log(comment.body);
                // res.json(dbArticle)
                res.render('test', {result})
                // res.render('test')
                // res.redirect('/hello')
            })
        // .then(dbComment => res.render('saved', {dbComment}))
        .catch(err => res.json(err));
    });
    
    app.post("/comment/:id", (req, res) => {

        db.Comment.create(req.body)
        .then(dbComment => db.Article.findOneAndUpdate(
            { _id: req.params.id}, {$push: {comment: dbComment._id}}, {new: true})
        )
        .then(dbArticle => res.json(dbArticle))
        // .then(dbArticle => console.log(dbArticle))
        // .then(dbComment => res.render('saved', {dbComment}))
        .catch(err => res.json(err));

    });




}