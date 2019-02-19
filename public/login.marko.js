function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<html>\n<head>\n  <title>Login</title>\n</head>\n<body>\n  ");

    if (input.message) {
      out.w("\n  <h4> " +
        escapeXml(input.message) +
        " </h4>\n  <form action=\"/login\" method=\"POST\">\n    <input name=\"username\" type=\"text\" required=\"required\" placeholder=\"username\">\n    <input name=\"password\" type=\"password\" required=\"required\" placeholder=\"password\">\n    <button type=\"Submit\">Log in</button>\n  </form>\n");
    }

    out.w("\n</body>\n</html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
