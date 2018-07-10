const db = require("./../models");

module.exports = function(app){

    // app.get("/", function(req, res) {
    //     db.Article.find({ saved: false}, function(error, data) {
    //         if (error) {
    //             console.log(error);
    //             return error;
    //         } else {

    //             const articleArr = [];

    //             for(let i = 0; i < data.length; i++){
    //                 const article = {
    //                     id: data[i]._id,
    //                     headline: data[i].headline,
    //                     link: data[i].link
    //                 };
    //                 articleArr.push(article);
    //             }
    //             res.render('landing', {articleArr})
    //         }
    //     })
    // });

    // app.get("/saved", function(req, res) {
    //     db.Article.find({ saved: true}, function(error, data) {
    //         if (error) {
    //             console.log(error);
    //             return error;
    //         } else {

    //             const savedArr = [];

    //             for(let i = 0; i < data.length; i++){
    //                 const article = {
    //                     id: data[i]._id,
    //                     headline: data[i].headline,
    //                     link: data[i].link
    //                 };
    //                 savedArr.push(article);
    //             }
    //             res.render('saved', {savedArr})
    //         }
    //     })
    // });








    app.get("/", (req, res) => {
        db.Article.find({ saved: false})
            .then(dbArticle => res.render('landing', {dbArticle}))
            .catch(err => res.json(err)
        );
    });

    app.get("/saved", (req, res) => {
        db.Article.find({ saved: true})
            .then(dbArticle => res.render('saved', {dbArticle}))
            .catch(err => res.json(err)
        );
    });




}