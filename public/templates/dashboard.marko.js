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
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Dashboard Page</title><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"/js/bubble_chart.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li><li class=\"navitem\"><a href=\"/\">About</a></li><li class=\"navitem\"><a href=\"/authentication\">Sign In</a></li></div></ul><div class=\"container\"><svg></svg></div><script src=\"https://d3js.org/d3.v4.min.js\"></script><script>\n        var svgWidth = 500;\n        var svgHeight = 300;\n        var svg = d3.select('svg')\n            .attr(\"width\", svgWidth)\n            .attr(\"height\", svgHeight)\n            .attr(\"class\", \"bar-chart\");\n\n        var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];\n        var barPadding = 5;\n        var barWidth = (svgWidth / dataset.length);\n        var barChart = svg.selectAll(\"rect\")\n            .data(dataset)\n            .enter()\n            .append(\"rect\")\n            .attr(\"y\", function(d) {\n                return svgHeight - d\n            })\n            .attr(\"height\", function(d) {\n                return d;\n            })\n            .attr(\"width\", barWidth - barPadding)\n            .attr(\"transform\", function (d, i) {\n                var translate = [barWidth * i, 0];\n                return \"translate(\"+ translate +\")\";\n            });\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

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
