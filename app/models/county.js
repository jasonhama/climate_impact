"use strict";

var Firebase = require('firebase');

var countyRef = new Firebase('https://climateimpact.firebaseio.com/county');

var county = {

    create(details) {
        return countyRef.set({
            name: details.name,

        })
    },


};

module.exports.County = function() {
    return county;
}