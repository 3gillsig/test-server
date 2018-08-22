const request = require('request');
const cheerio = require('cheerio');
const h = require('apis-helpers');
var appRouter = function (app) {
    app.get("/api", function (req, res) {
       
       res.status(200).send('Crash');
    });
};

module.exports = appRouter;