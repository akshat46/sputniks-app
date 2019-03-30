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

  out.w("<html><head><title>Dashboard Page</title><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/dialog.css\" rel=\"stylesheet\" type=\"text/css\"><link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\"></head><body class=\"dashboard-bg\">");

  component_globals_tag({}, out);

  out.w("<div class=\"custom-dialog\"></div><ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li><li><div class=\"dropdown\"><img class=\"dropdown\" src=\"./src/images/img_avatar.png\" alt=\"Avatar\"><div class=\"dropdown-content\"><a href=\"/details\">Edit Details</a><a href=\"/logout\">Sign Out</a></div></div> </li><li class=\"navitem\"><a href=\"/about\">About</a></li></div></ul><div class=\"button-row\"><button class=\"map-button selected\">Map</button><button class=\"bubble-button\">Bubble chart</button><button class=\"game-button\">Play Game</button><button class=\"food-preference-button\">Choose your food preferences</button></div><div class=\"bubble-chart right-panel\"><div class=\"column\"><div class=\"column-content\"></div><p class=\"column-label\"> Total Restuarant Insight for city " +
    marko_escapeXml(input.city) +
    "</p></div></div><div class=\"map-container center-panel\"><link href=\"/css/map.css\" rel=\"stylesheet\" type=\"text/css\" />\n<div id=\"map\"></div>\n<div id=\"map-control-panel\">\n  <input class=\"location-field\" name=\"location\" type=\"text\" placeholder=\"Location\"></input>\n  <div class=\"location-button\"><i data-feather=\"check\"></i></div>\n  <div class=\"snapshot-button\"><i data-feather=\"camera\"></i></div>\n</div>\n<script src=\"https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js\"></script>\n<script src=\"/js/map.js\"></script>\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCzGa6kea5GkeVEBjPTEUMq2bwz_X0MoNA&callback=initMap\" async defer></script>\n</div><div class=\"game-panel game-right\"><button class=\"game-button play-button\" onclick=\"startGame()\">Start Game</button><canvas id=\"game\" width=\"800px\" height=\"500px\"></canvas></div><div class=\"food-preference-panel right-panel\"><div id=\"content\"><div id=\"selectionPile\"></div><div id=\"selectionSlots\"></div></div></div><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"https://code.jquery.com/ui/1.12.0/jquery-ui.min.js\"></script><script type=\"text/javascript\" src=\"https://d3js.org/d3.v4.min.js\"></script><script src=\"js/bubble_chart.js\"></script><script src=\"js/dashboard.js\"></script><script src=\"js/game.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

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
