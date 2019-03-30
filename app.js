// Main App File

require("marko/node-require");

const express = require('express');
const markoExpress = require('marko/express');
const routes = require("./app/routes/router");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

const app = express();
const port = 3000;

const Schema = mongoose.Schema;

let yelpUser = new Schema({}, {collection: 'yelp_users'});
let appUsers = new Schema({username:String, password:String, firstname: String, lastname: String, city: String, state: String, zipcode: String, food: String, notification: String});

mongoose.connect('mongodb://admin:cmpe280admin@ds151820.mlab.com:51820/sputniks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session( {secret: "String for encrypting cookies." } ));
app.use(express.static(__dirname + '/public'));
app.use(markoExpress());

mongoose.model('yelp_users', yelpUser);
mongoose.model('app_users', appUsers);


app.listen(port, () => console.log('app listening on port 3000.'));

app.use('/', routes);
