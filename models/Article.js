var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    article: {
        type: String,
        require: true,
        unique: {index: {unique: true}}
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    saved: {
        type: Boolean,
        default: false
    }

});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;