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

  out.w("<html><head></head><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"background\"><div id=\"panel-box\"><form class=\"form\" action=\"/dashboard\" method=\"POST\"><label class=\"modal-label\" for=\"city\">City</label><input class=\"modal-input\" id=\"city\" name=\"city\" type=\"text\" required=\"required\" placeholder=\"City\"><label class=\"modal-label\" for=\"state\">State</label><input class=\"modal-input\" id=\"state\" name=\"state\" type=\"text\" required=\"required\" placeholder=\"State\"><label class=\"modal-label\" for=\"zip\">ZipCode</label><input class=\"modal-input\" id=\"zip\" name=\"zip\" type=\"number\" onkeyup=\"validateZip()\" required=\"required\" placeholder=\"ZipCode\"><div id=\"zipCodeError\"></div><label class=\"modal-label\">Your food choice?</label><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Indian\"> <div class=\"cbox-label\">Indian</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Mexican\"> <div class=\"cbox-label\">Mexican</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Italian\"> <div class=\"cbox-label\">Italian</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Thai\"> <div class=\"cbox-label\">Thai</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"German\"> <div class=\"cbox-label\">German</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Canadian\"> <div class=\"cbox-label\">Canadian</div><input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Hungarian\"> <div class=\"cbox-label\">Hungarian</div><div id=\"checkBoxError\"></div><label class=\"modal-label\">Receive Notification?</label><input type=\"radio\" name=\"notification\" value=\"yes\" checked=\"\"> <div class=\"cbox-label\">Yes</div><input type=\"radio\" name=\"notification\" value=\"no\"><div class=\"cbox-label\"> No</div><button class=\"button-form\" id=\"detailSubmit\" type=\"Submit\" disabled>Submit Details</button></form><div class=\"container\"><script src=\"js/details.js\"></script></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body><script src=\"/js/validations.js\"></script></html>");
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
