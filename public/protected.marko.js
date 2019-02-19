function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<html>\n  <head>\n    <title>Protected page</title>\n  </head>\n  <body>\n    <p>Hi, " +
      escapeXml(input.name) +
      "!</p>\n    <p>Welcome to the protected page.</p>\n  </body>\n</html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
