// Main App File

require("marko/node-require");

const express = require('express');
const markoExpress = require('marko/express');
const routes = require("./app/routes/router");
var bodyParser = require('body-parser');
var session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session( {secret: "String for encrypting cookies." } ));
app.use(express.static(__dirname + '/public'));
app.use(markoExpress());

app.listen(port, () => console.log('app listening on port 3000.'));

app.use('/', routes);
