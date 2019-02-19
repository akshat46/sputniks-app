// exports each of the templates (html) in order to be used by the router.
// must be named index.js to work as the primary js file for /public.

exports.home = require("./templates/home");
exports.loggedIn = require("./templates/loggedin");
exports.login = require("./templates/login");
exports.protected = require("./templates/protected");
exports.register = require("./templates/register");
