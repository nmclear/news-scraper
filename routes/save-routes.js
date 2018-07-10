const db = require("./../models");

module.exports = app => {

    app.put("/save/:id", function(req,res){
        const id = req.params.id;
        db.Article.update({"_id": id}, {$set:{"saved": true}}, function(error, data){
            if (error) {
                console.log(error);
                return error;
            }
        })
    });

    // app.put("/unsave/:id", (req,res) => {
    //     db.Article.update({"_id": req.params.id}, {$set:{"saved": false}}, function(error, data){
    //         if (error) {
    //             console.log(error);
    //             return error;
    //         }
    //     })
    // });

    app.put("/unsave/:id", (req,res) => 
        db.Article.update({"_id": req.params.id}, {$set:{"saved": false}})
        
        .then(dbArticle => {
            console.log('tester')
            // res.redirect("/saved")
            res.redirect('back');
        })
            // res.redirect("/../saved"))
            // res.redirect('back'))
    
        .catch(err => res.json(err))
    );
}