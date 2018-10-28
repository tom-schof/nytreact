const axios = require("axios");
const cheerio = require("cheerio");

const scrape = () => {
    return axios.get("http://www.nytimes.com").then(res =>{
        const $ = cheerio.load(res.data);
        
        let articles = [];

        $("article.css-180b3ld").each((i,element) => {
            let head = $(this)
            .find("h2")
            .text()
            .trim();

            let url = $(this)
            .find("a")
            .attr("href");


            let sum = $(this)
            .find("p")
            .text()
            .trim();

        if(head && sum && url) {
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            
            var dataToAdd = {
                headline: headNeat,
                summary: sumNeat,
                url: "https://www.nytimes.com" + url
            };

            articles.push(dataToAdd);
            }
        });
        return articles
    });
};

module.exports = scrape;