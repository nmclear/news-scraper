const mongoose = require("mongoose");

// SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

// ARTICLE SCHEMA OBJECT
const ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  // summary: {
  //   type: String,
  //   required: true
  // },
  link: {
    type: String,
    required: true
  },
  // LINKS OBJECT ID TO COMMENT MODEL
  // POPULATE ARTICLE WITH ASSOCIATED COMMENTS
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

// CREATE MONGOOSE MODEL
const Article = mongoose.model("Article", ArticleSchema);

// EXPORT ARTICLE
module.exports = Article;