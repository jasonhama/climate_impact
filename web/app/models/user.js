"use strict";

var mongoose = reguire('mongoose');

mongoose.Promise = require('bluebird');

var userSchema = new Schema({
    local : {
        email: {type: String, required: true, unique: true},
        gravatarURL: {},
        displayName: String,
        groups : [{type: Schema.Types.ObjectId, required: true, ref: 'Community'}],
        profile_url : String,
        location: {type: [Number], required: true}, // [Long, Lat]
        carbon_footprint : {type: Number},
        current_score : {type : Number, default : 0},
        carbon_savings : {type : Number, default : 0, min : 0},
        water_savings : {type: Number, default : 0, min : 0},
        zipcode : {type : Number},
        password    : {type: String},
        resetPasswordToken: String,
        resetPasswordExpires: Date
    },
    social : {
        provider: {type: String, required: true},
        callbackUrl: {type: String, required: true},
    }
});

var User = mongoose.model('User', userSchema);