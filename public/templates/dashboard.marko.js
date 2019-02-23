// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/dashboard.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Dashboard Page</title><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li><li class=\"navitem\"><a href=\"/\">About</a></li><li class=\"navitem\"><a href=\"/authentication\">Sign In</a></li></div></ul><div class=\"container\"><div class=\"column\"><div class=\"column-content\"></div></div><div class=\"column\"><div class=\"column-content\"></div><p class=\"column-label\"> Total Restuarant Insight for city " +
    marko_escapeXml(input.city) +
    "</p></div></div><link href=\"/css/map.css\" rel=\"stylesheet\" type=\"text/css\" />\n<div id=\"map\"></div>\n<script src=\"/js/map.js\"></script>\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCzGa6kea5GkeVEBjPTEUMq2bwz_X0MoNA&callback=initMap\" async defer></script>\n<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><script src=\"js/bubble_chart.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/dashboard.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
