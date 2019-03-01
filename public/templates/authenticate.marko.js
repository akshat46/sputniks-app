// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/authenticate.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Sputnik: Authentication</title></head><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/auth.css\" rel=\"stylesheet\" type=\"text/css\"><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"background\"><div id=\"panel-box\"><div class=\"panel\"><div class=\"auth-form on\" id=\"login\"><div id=\"form-title\">Log In</div><form action=\"/login\" method=\"POST\"><input name=\"username\" type=\"text\" required=\"required\" placeholder=\"Username\"><input name=\"password\" type=\"password\" required=\"required\" placeholder=\"Password\"><button type=\"Submit\">Log In</button></form></div><div class=\"auth-form\" id=\"signup\"><div id=\"form-title\">Register</div><form action=\"/register\" method=\"POST\"><input name=\"username\" type=\"text\" required=\"required\" placeholder=\"Username\"><div class=\"center password\"><input class=\"password-field\" name=\"password\" type=\"password\" required=\"required\" placeholder=\"Password\"><div class=\"password-validate\"></div></div><button type=\"Submit\">Sign Up</button></form></div></div><div class=\"panel\"><div id=\"switch\">Sign Up</div><div id=\"image-overlay\"></div><div id=\"image-side\"></div></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"/js/auth.js\"></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/authenticate.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
