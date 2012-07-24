
// The code below uses require.js, a module system for javscript:
// http://requirejs.org/docs/api.html#define

var global = this;

<%- js_global %>

// When you write javascript in separate files, list them as
// dependencies along with jquery
define("app", function(require) {

<%- js_init %>

    // START HERE: Put your js code here
});

// Include the in-app payments API, and if it fails to load handle it
// gracefully.
// https://developer.mozilla.org/en/Apps/In-app_payments
require(['https://marketplace-cdn.addons.mozilla.net/mozmarket.js'],
        function() {},
        function(err) {
            global.mozmarket = global.mozmarket || {};
            global.mozmarket.buy = function() {
                alert('The in-app purchasing is currently unavailable.');
            };
        });
