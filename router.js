// This file defines all the routes to be used for the app.

const express = require('express');
const router = express.Router();
const controller = require("./main");
const app = express();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now()); // middle ware code
  next();
});

router.get('/', controller.root);

router.get('/about', function(req, res) {
  res.send("about page");
});

module.exports = router;
