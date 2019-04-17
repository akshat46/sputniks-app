// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/dashboard_main.marko",
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

  out.w("<html><head><title>Dashboard</title><link href=\"/css/dashboard.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"dashboard-wrapper\"><div class=\"filters-bar\"><div class=\"title-wrapper\"><i class=\"icon\" data-feather=\"sliders\"></i> Filter Options</div></div><div class=\"flex-container\"><div class=\"flex-item\"><div class=\"card\" id=\"map-card\">Map Card</div></div><div class=\"flex-item\"><div class=\"card\" id=\"chart-med\">Chart 1 Card</div><div class=\"card\" id=\"chart-med\">Chart 2 Card</div></div><div class=\"flex-item\"><div class=\"card\" id=\"chart-med\">Chart 3 Card</div><div class=\"card\" id=\"chart-small\">Chart 4 Card</div></div></div></div><script src=\"https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js\"></script><script src=\"js/dashboard_main.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/dashboard_main.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
