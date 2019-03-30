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

router.get('/authentication', controller.get_auth);

router.get('/register',controller.get_auth);

router.post('/register', controller.post_register);

router.get('/login', controller.get_auth);

router.post('/login', controller.post_login);

router.get('/logout', controller.get_logout);

router.get('/protected', controller.loggedIn, controller.get_protected);

router.get('/dashboard', controller.dashboard);

router.post('/dashboard', controller.dataentry);

router.get('/dataSearch', controller.data_search);

router.get('/details', controller.details);

router.get('/about', controller.get_about);

// router.post('/dataentry', controller.dataentry);

module.exports = router;
