function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!doctype html>\n\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Sputniks</title>\n  <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\">\n</head>\n<body>\n  <h1>Hello World " +
      escapeXml(input.name) +
      "</h1>\n  <script src=\"js/scripts.js\"></script>\n</body>\n</html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
