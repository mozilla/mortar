
var fs = require('fs');

module.exports = {
    head: function() {
        return fs.readFileSync(__dirname + '/head.html');
    },
    js_init: function() {
        return fs.readFileSync(__dirname + '/js_init.html');
    },
    js_global: function() {
        return fs.readFileSync(__dirname + '/js_global.html');
    }
};