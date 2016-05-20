"use strict";
var htmlparser = require('htmlparser2');    //parse html
var cheerio = require('cheerio');
var rp = require('request-promise');

// var incarbonFP = false;
var baseURL = 'http://impact.brighterplanet.com/';
var modelsURL = 'http://impact.brighterplanet.com/models';
var inModelTag = false;
var footprintVal;

console.log('Scraping URL: ' + modelsURL);
console.log('Initializing parser...');

var models = [];

// var modelsParser = new htmlparser.WritableStream({
//     //called whenever the parser encounters an open tag
//     onopentag: function (name, attrs) {
//         //detect shit about the tag
//         if (name === 'a') {
//             var chunks = attrs.href.split('/');
//             if (chunks.length > 2) {
//                 models.push(chunks[2]);
//             }
//         }
//     },
//     ontext: function(text) {
//         //if we are in the carbon footprint elem
//         if (inModelTag) {
//             //ontext may be called several times, so append
//             //the text value to req.body.title, or set
//             //req.body.title if it doesn't exist yet
//             console.log(text);
//         }
//     },
//     onclosetag: function() {
//         //once the tag closes we are no longer
//         //in the title element by definition
//         // incarbonFP = false;
//         inModelTag = false;
//     }
// }, {decodeEntities: true});

var modelOptions = {
    uri: modelsURL,
    transform: function (body) {
        return cheerio.load(body);
    }
};

function getCharacteristics(modelName) {
    return new Promise(function(resolve, reject) {
        var opts = {
            uri: baseURL + modelName + 's/options',
            simple: false,
            resolveWithFullResponse: true
        };

        rp(opts)
            .then(function (response) {
                console.log('GET ' + opts.uri + ' ' + response.statusCode);
                console.log('Loading response to cheerio...');
                var $  = cheerio.load(response.body);

                var associations = [];
                var attributes = [];

                $('.associations li').map(function(i, elem) {

                    var assoc = {};

                    var kids = elem.children;
                    var h3 = kids[1];

                    var nameKBD = h3.children[1];
                    var name = nameKBD.children[0].data;

                    assoc.name = name;

                    var dl = kids[3];
                    // console.log('dl has ' + dl.children.length + ' children');
                    for (var i = 0; i < dl.children.length; i++) {
                        if (i % 2 != 0) {
                            var child = dl.children[i];
                            if (child.attribs.class === 'identifier' && child.name === 'dd') {
                                var kbd = child.children[0];
                                assoc.identifier = kbd.children[0].data;
                            }
                        }
                    }
                    associations.push(assoc);
                });


                $('.attributes li').map(function(i, elem) {
                    var attr = {};
                    var kids = elem.children;
                    var h3 = kids[1];

                    var nameKBD = h3.children[1];
                    var name = nameKBD.children[0].data;
                    attr.name = name;

                    var dl = kids[3];
                    for (var i = 1; i < dl.children.length; i += 2) {
                        if (dl.children[i].name === 'dd' && dl.children[i].attribs.class !== 'example') {
                            var child = dl.children[i];
                            if (child.attribs.class === 'type') {
                                attr.type = child.children[0].data;
                            } else if (child.attribs.class === 'trumps') {
                                attr.unit = child.children[0].data;
                            }
                        }
                    }
                    attributes.push(attr);
                });

                var result = {attributes: attributes, associations: associations};
                resolve(result);
            })
            .catch(function (err) {
                reject('Failed to resolve ' + opts.uri);
            });
    });
}

rp(modelOptions)
    .then(function ($) {
        var model;
        $('span.model').each(function(i, element) {
            var a = $(this).parent();
            var pathStr = a.attr("href").split("/");
            model = {
                name: pathStr[2],
                attributes: [ ],
                associations: [ ]
            };
            models.push(model);
        });
        console.log('Done parsing urls...');
    })
    .then(function() {
        models.forEach(function(model, idx) {
            getCharacteristics(model.name, idx)
                .then(function(result) {
                    console.log('Done processing model: ' + models[idx].name);
                    models[idx].attributes = result.attributes;
                    models[idx].associations = result.associations;
                    console.dir(models[idx]);
                    // console.log('\n');
                })
                .catch(function(err) {
                    console.log(err);
                });
        });
    })
    .then(function(models) {
        console.log("Processed all models!\n");
        // console.dir(models);
    })
    .catch(function (err) {
        // Crawling failed or cheerio choked...
        console.log(err);
        exit(1);
    });



