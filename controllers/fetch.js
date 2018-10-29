const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
    scrapeArticles: (req,res) => {
        return scrape()
        .then( articles => {
            return db.Article.create(articles);
        })
        .then( dbArticle => {
            if (dbArticle.length ===0) {
                res.json({
                    message: "No articles here"
                });
            }
            else {
                res.json({
                    message: `Added ${dbArticle.length} new articles!`
                });
            }
        })
        .catch( err => {
            res.json({
                message: "Scrape complete!"
            });
        });
    }
};