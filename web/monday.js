"use strict";
var request = require('request');           //request URLs
var htmlparser = require('htmlparser2');    //parse html
var cheerio = require('cheerio');


// var incarbonFP = false;

var baseURL = 'http://impact.brighterplanet.com/models';
var inModelTag = false;
var footprintVal;

console.log('Scraping URL: ' + baseURL);
console.log('Initializing parser...');
var parser = new htmlparser.WritableStream({
    //called whenever the parser encounters an open tag
    onopentag: function (name, attrs) {
        //detect shit about the tag
        if (name === 'a') {
            console.log("Found a link tag");
            console.dir(attrs);
        }
    },
    ontext: function(text) {
        //if we are in the carbon footprint elem
        if (inModelTag) {
            //ontext may be called several times, so append
            //the text value to req.body.title, or set
            //req.body.title if it doesn't exist yet
            console.log(text);
        }
    },
    onclosetag: function() {
        //once the tag closes we are no longer
        //in the title element by definition
        // incarbonFP = false;
        inModelTag = false;
    }
}, {decodeEntities: true});

request.get(targetURL, {followRedirect: false})
    .on('error', function() {
        console.error('error requesting page');
        exit(1);
    })
    .on('end', function() {
        console.log('passing on to parser...');
    })
    .pipe(parser);