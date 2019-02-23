// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/details.marko",
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

  out.w("<html><head></head><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/auth.css\" rel=\"stylesheet\" type=\"text/css\"><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"modal\"><div class=\"modal-content\"><form class=\"modal-form\" action=\"/dataentry\" method=\"POST\"><label class=\"modal-label\" for=\"city\">City</label><input class=\"modal-input\" id=\"city\" name=\"city\" type=\"text\" required=\"required\" placeholder=\"City\"><label class=\"modal-label\" for=\"state\">State</label><input class=\"modal-input\" id=\"state\" name=\"state\" type=\"text\" required=\"required\" placeholder=\"State\"><label class=\"modal-label\" for=\"zip\">ZipCode</label><input class=\"modal-input\" id=\"zip\" name=\"zip\" type=\"number\" required=\"required\" placeholder=\"ZipCode\"><label class=\"modal-label\">Your food choice?</label><input type=\"checkbox\" name=\"Indian\" value=\"yes\"> Indian <input type=\"checkbox\" name=\"Mexican\" value=\"no\"> Mexican <input type=\"checkbox\" name=\"Italian\" value=\"yes\"> Italian <input type=\"checkbox\" name=\"Thai\" value=\"no\"> Thai <input type=\"checkbox\" name=\"German\" value=\"yes\"> German <input type=\"checkbox\" name=\"Canadian\" value=\"no\"> Canadian <input type=\"checkbox\" name=\"Hungarian\" value=\"no\"> Hungarian <label class=\"modal-label\">Receive Notification?</label><input type=\"radio\" name=\"notification\" value=\"yes\" checked=\"\"> Yes <input type=\"radio\" name=\"notification\" value=\"no\"> No <button class=\"button-form\" type=\"Submit\">Submit Details</button></form><div class=\"container\"><script src=\"js/details.js\"></script></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/details.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
