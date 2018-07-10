const mongoose = require("mongoose");

// SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

// CREATE MONGOOSE MODEL
const Comment = mongoose.model("Comment", CommentSchema);

// EXPORT COMMENT
module.exports = Comment;