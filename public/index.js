// exports each of the templates (html) in order to be used by the router.
// must be named index.js to work as the primary js file for /public.

exports.home = require("./templates/home");
exports.auth = require("./templates/authenticate");
exports.loggedIn = require("./templates/loggedin");
exports.login = require("./templates/login");
exports.protected = require("./templates/protected");
exports.register = require("./templates/register");
exports.dashboard = require("./templates/dashboard");
exports.dashboard_main = require("./templates/dashboard_main");
exports.details = require("./templates/details");
exports.about = require("./templates/about");
exports.friends = require("./templates/friends");
