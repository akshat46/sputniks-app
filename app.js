// Main App File

require("marko/node-require");

const express = require('express');
const markoExpress = require('marko/express');
const routes = require("./router");

const app = express();
const port = 3000
//somethi

app.use(markoExpress());

app.listen(port, () => console.log('app listening on port 3000.'));

app.use('/', routes);
app.use('/about', routes);
