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
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Dashboard</title><link href=\"/css/dashboard.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/stacked_bar.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li><li><div class=\"dropdown\"><img class=\"dropdown\" src=\"./src/images/img_avatar.png\" alt=\"Avatar\"><div class=\"dropdown-content\"><a href=\"/details\">Edit Details</a><a href=\"/logout\">Sign Out</a></div></div></li><li class=\"navitem\"><a href=\"/about\">About</a></li></div></ul><div class=\"no-data-dashbaord\"><div class=\"no-data-filter\"><div class=\"welcome-wrapper\"><p class=\"welcome-text\">Welcome to Yelp Insights</p><p class=\"location-text\">Please select your location</p><div class=\"title-wrapper\"><i class=\"icon\" data-feather=\"sliders\"></i> Filter Options</div><div class=\"cuisine-container\"><select id=\"state\"><option value=\"0\">Select State:</option><pre>" +
    marko_escapeXml(input.states) +
    "</pre>");

  var for__30 = 0;

  marko_forEach(input.states, function(state, index) {
    var keyscope__31 = "[" + ((for__30++) + "]");

    out.w("<option" +
      marko_attr("value", "" + state) +
      ">" +
      marko_escapeXml(state) +
      "</option>");
  });

  out.w("</select><div><select id=\"cities\"><option value=\"0\">Select City:</option></select></div></div></div></div><div class=\"flex-container\"><div class=\"flex-item\"><div class=\"card\" id=\"map-card\"><div id=\"map\"></div></div></div><div class=\"flex-item\"><div class=\"card chart-med\"><p>Categories and Restaurants Count</p><div id=\"chart-bubble\"></div></div><div class=\"card chart-med\"><div class=\"chart-price-container\" id=\"chart-price\"><p>Restaurants in different Price Range</p><div id=\"chart-price-body\"></div><div class=\"legend\"><ul><li class=\"one\">$</li><li class=\"two\">$$</li><li class=\"three\">$$$</li><li class=\"four\">$$$$</li></ul></div></div></div></div><div class=\"flex-item\"><div class=\"card chart-med\"><div id=\"bar_chart\"></div></div><div class=\"card chart-small\"><div id=\"chart-wifi\"></div></div></div></div></div><script src=\"https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js\"></script><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"https://code.jquery.com/ui/1.12.0/jquery-ui.min.js\"></script><script src=\"/js/map.js\"></script><script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCzGa6kea5GkeVEBjPTEUMq2bwz_X0MoNA&amp;callback=initMap\" async defer></script><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><script src=\"js/bubble_chart.js\"></script><script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script><script type=\"text/javascript\" src=\"js/bar_chart.js\"></script><script type=\"text/javascript\" src=\"js/wifi_chart.js\"></script><script type=\"text/javascript\" src=\"js/map_chart.js\"></script><script src=\"js/stacked_bar.js\"></script><script src=\"js/dashboard_main.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "72");

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
