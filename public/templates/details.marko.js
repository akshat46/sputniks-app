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
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head></head><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"background\"><div id=\"panel-box\"><form class=\"form\" action=\"/details\" method=\"POST\"><label class=\"modal-label\" for=\"firstname\">First Name</label><input class=\"modal-input\" id=\"firstname\" name=\"firstname\" type=\"text\" required=\"required\" placeholder=\"First Name\"" +
    marko_attr("value", "" + input.user.firstname) +
    "><label class=\"modal-label\" for=\"lastname\">First Name</label><input class=\"modal-input\" id=\"lastname\" name=\"lastname\" type=\"text\" required=\"required\" placeholder=\"Last Name\"" +
    marko_attr("value", "" + input.user.lastname) +
    "><label class=\"modal-label\" for=\"city\">City</label><input class=\"modal-input\" id=\"city\" name=\"city\" type=\"text\" required=\"required\" placeholder=\"City\"" +
    marko_attr("value", "" + input.user.city) +
    "><label class=\"modal-label\" for=\"state\">State</label><input class=\"modal-input\" id=\"state\" name=\"state\" type=\"text\" required=\"required\" placeholder=\"State\"" +
    marko_attr("value", "" + input.user.state) +
    "><label class=\"modal-label\" for=\"zip\">ZipCode</label><input class=\"modal-input\" id=\"zip\" name=\"zipcode\" type=\"number\" onkeyup=\"validateZip()\" required=\"required\" placeholder=\"ZipCode\"" +
    marko_attr("value", "" + input.user.zipcode) +
    "><div id=\"zipCodeError\"></div><label class=\"modal-label\">Your food choice?</label>");

  if (input.user.food.split(",").indexOf("Indian") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Indian\" checked> <div class=\"cbox-label\">Indian</div>");
  }

  if (input.user.food.split(",").indexOf("Indian") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Indian\"> <div class=\"cbox-label\">Indian</div>");
  }

  if (input.user.food.split(",").indexOf("Mexican") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Mexican\" checked> <div class=\"cbox-label\">Mexican</div>");
  }

  if (input.user.food.split(",").indexOf("Mexican") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Mexican\"> <div class=\"cbox-label\">Mexican</div>");
  }

  if (input.user.food.split(",").indexOf("Italian") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Italian\" checked> <div class=\"cbox-label\">Italian</div>");
  }

  if (input.user.food.split(",").indexOf("Italian") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Italian\"> <div class=\"cbox-label\">Italian</div>");
  }

  if (input.user.food.split(",").indexOf("Thai") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Thai\" checked> <div class=\"cbox-label\">Thai</div>");
  }

  if (input.user.food.split(",").indexOf("Thai") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Thai\"> <div class=\"cbox-label\">Thai</div>");
  }

  if (input.user.food.split(",").indexOf("German") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"German\" checked> <div class=\"cbox-label\">German</div>");
  }

  if (input.user.food.split(",").indexOf("German") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"German\"> <div class=\"cbox-label\">German</div>");
  }

  if (input.user.food.split(",").indexOf("Canadian") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Canadian\" checked> <div class=\"cbox-label\">Canadian</div>");
  }

  if (input.user.food.split(",").indexOf("Canadian") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Canadian\"> <div class=\"cbox-label\">Canadian</div>");
  }

  if (input.user.food.split(",").indexOf("Hungarian") > -1) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Hungarian\" checked> <div class=\"cbox-label\">Hungarian</div>");
  }

  if (input.user.food.split(",").indexOf("Hungarian") < 0) {
    out.w("<input class=\"custom-cbox\" onclick=\"checkCheckBox()\" type=\"checkbox\" name=\"food\" value=\"Hungarian\"> <div class=\"cbox-label\">Hungarian</div>");
  }

  out.w("<div id=\"checkBoxError\"></div><label class=\"modal-label\">Receive Notification?</label>");

  if (input.user.notification == "yes") {
    out.w("<input type=\"radio\" name=\"notification\" value=\"yes\" checked=\"\"> <div class=\"cbox-label\">Yes</div><input type=\"radio\" name=\"notification\" value=\"no\"> <div class=\"cbox-label\">No</div>");
  }

  if (input.user.notification != "yes") {
    out.w("<input type=\"radio\" name=\"notification\" value=\"yes\"> <div class=\"cbox-label\">Yes</div><input type=\"radio\" name=\"notification\" value=\"no\" checked> <div class=\"cbox-label\">No</div>");
  }

  out.w("<label class=\"modal-label\">Upload Profile Picture</label><input type=\"file\" id=\"avatar\" name=\"avatar\" accept=\"image/*\"><button class=\"button-form\" id=\"detailSubmit\" type=\"submit\">Submit Details</button></form><div class=\"container\"><script src=\"js/details.js\"></script></div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "63");

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
