// Controller file

const templates = require("./public");

module.exports.root = function(req, res, next){
  var context = {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  };
  res.marko(templates.home, context);
}
