var config = require('../utils/config');
var logger = require('../utils/logger');
var mongoose = require('mongoose');

mongoose.connect(config.mongo.uri + config.mongo.database, function(err) {
    if (err) {
        logger.error('database: ' + err);
        process.exit(1);
    }
});

var packageSchema = mongoose.Schema({
    architecture: String,
    author: String,
    category: String,
    changelog: String,
    deleted: Boolean,
    description: String,
    downloads: {},
    filesize: Number,
    framework: String,
    icon: String,
    id: {type: String, index: true},
    license: String,
    manifest: {},
    name: String,
    package: String,
    source: String,
    tagline: String,
    types: [String],
    version: String,
});

var Package = mongoose.model('Package', packageSchema);

var userSchema = mongoose.Schema({
    apikey: String,
    email: String,
    language: String,
    name: String,
    role: String,
    ubuntu_id: {type: String, index: true},
    username: String,
});

var User = mongoose.model('User', userSchema);

exports.Package = Package;
exports.User = User;
