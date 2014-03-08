'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    }
});

var Pet = mongoose.model('Pet', PetSchema);

exports.model = function() { return Pet; };

