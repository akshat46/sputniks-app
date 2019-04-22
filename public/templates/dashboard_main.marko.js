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
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Dashboard</title><link href=\"/css/dashboard.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/stacked_bar.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li><li><div class=\"dropdown\"><img class=\"dropdown\" src=\"./src/images/img_avatar.png\" alt=\"Avatar\"><div class=\"dropdown-content\"><a href=\"/details\">Edit Details</a><a href=\"/logout\">Sign Out</a></div></div></li><li class=\"navitem\"><a href=\"/about\">About</a></li></div></ul><div class=\"dashboard-wrapper\"><div class=\"filters-bar\"><div class=\"title-wrapper\"><i class=\"icon\" data-feather=\"sliders\"></i> Filter Options</div><div><select id=\"state\"><option value=\"0\">Select State:</option>");

  var for__26 = 0;

  marko_forEach(input.states, function(state) {
    var keyscope__27 = "[" + ((for__26++) + "]");

    out.w("<option" +
      marko_attr("value", "" + state) +
      ">" +
      marko_escapeXml(state) +
      "</option>");
  });

  out.w("</select></div><div><select id=\"cities\"><option value=\"0\">Select City:</option></select></div></div><div class=\"flex-container\"><div class=\"flex-item\"><div class=\"card\" id=\"map-card\">Map Card</div></div><div class=\"flex-item\"><div class=\"card\" id=\"chart-bubble\"></div><div class=\"chart-price-container\"><div class=\"card\" id=\"chart-price\"><div id=\"chart-price-body\"></div><div class=\"legend\"><ul><li class=\"one\">$</li><li class=\"two\">$$</li><li class=\"three\">$$$</li><li class=\"four\">$$$$</li></ul></div></div></div></div><div class=\"flex-item\"><div class=\"card\" id=\"chart-med\">Chart 3 Card</div><div class=\"card\" id=\"chart-small\">Chart 4 Card</div></div></div></div><script src=\"https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js\"></script><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"https://code.jquery.com/ui/1.12.0/jquery-ui.min.js\"></script><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><script src=\"js/bubble_chart.js\"></script><script src=\"js/stacked_bar.js\"></script><script src=\"js/dashboard_main.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

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
