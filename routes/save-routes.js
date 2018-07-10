const db = require("./../models");

module.exports = function(app){

    app.put("/save/:id", function(req,res){
        const id = req.params.id;
        db.Article.update({"_id": id}, {$set:{"saved": true}}, function(error, data){
            if (error) {
                console.log(error);
                return error;
            } else {

               console.log('Saved Worked');
            }
        })
    });

    app.put("/unsave/:id", function(req,res){
        console.log('put request for unsave');
        const id = req.params.id;
        db.Article.update({"_id": id}, {$set:{"saved": false}}, function(error, data){
            if (error) {
                console.log(error);
                return error;
            } else {

               console.log('Unsaved Worked');
            }
        })
    });
}