"use strict";
var request = require('request');           //request URLs
var htmlparser = require('htmlparser2');    //parse html
var cheerio = require('cheerio');

var $ = cheerio.load('<h2 class="title">Hello</h2>');

$('h2.title').text('Hello, World!');
$('h2').addClass('welcome');

var s = $.html();
console.log(s);

