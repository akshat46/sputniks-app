// This file defines all the routes to be used for the app.

const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
const router = express.Router();
const controller = require("../controller/controller");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now()); // middle ware code
  next();
});

router.get('/', controller.root);

router.get('/register', controller.get_register);

router.post('/register', controller.post_register);

router.get('/login', controller.get_login);

router.post('/login', controller.post_login);

router.get('/logout', controller.get_logout);

router.get('/protected', controller.loggedIn, controller.get_protected);

router.get('/about', function(req, res) {
  res.send("about page");
});

module.exports = router;
