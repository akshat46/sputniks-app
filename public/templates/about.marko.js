// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/about.marko",
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

  out.w("<html><head><title>About Page</title><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\"><link href=\"/css/jquery-ui.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/about.css\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<ul class=\"navbar\"><div class=\"container\"><li class=\"navitem brand\"><a href=\"/\">Sputniks</a></li>");

  if (input.logged) {
    out.w("<li class=\"navitem\"><a href=\"/logout\">Log out</a></li><li class=\"navitem\"><a href=\"/dashboard\">Dashboard</a></li>");
  } else {
    out.w("<li class=\"navitem\"><a href=\"/login\">Login</a></li>");
  }

  out.w("<li class=\"navitem\"><a href=\"/about\">About</a></li></div></ul><div id=\"tabs\"><ul><li><a href=\"templates/project_details.html\">About</a></li><li><a href=\"templates/team.html\">Team</a></li><li><a href=\"templates/technology.html\">Technologies</a></li></ul></div><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"https://code.jquery.com/ui/1.12.0/jquery-ui.min.js\"></script><script src=\"js/about.js\"></script><script src=\"js/header_animation.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/about.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
