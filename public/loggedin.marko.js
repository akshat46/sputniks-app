function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<html>\n  <head>\n    <title>Logged in page</title>\n  </head>\n  <body>\n    <p>Hi, " +
      escapeXml(input.name) +
      ", you're now logged in.</p>\n    <p>You may visit the protected page.</p>\n  </body>\n</html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
