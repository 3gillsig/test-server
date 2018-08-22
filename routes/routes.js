const request = require('request');
const cheerio = require('cheerio');
const alerts = require('../functions/flights/index.js');
const h = require('apis-helpers');
var appRouter = function (app) {
    app.get("/", function (req, res) {
       
       res.status(200).send('Crash');
    });
    
};

module.exports = appRouter;