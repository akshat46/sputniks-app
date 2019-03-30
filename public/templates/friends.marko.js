// Compiled using marko@4.15.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sputniks-app$1.0.0/public/templates/friends.marko",
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

  out.w("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>title</title></head><link href=\"/css/index.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/auth.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/css/friends.css\" rel=\"stylesheet\" type=\"text/css\"><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"background\" class=\"two\"><div id=\"panel-box\"><div class=\"friends-title\">Friends</div><button class=\"save-friends\">Save</button><div class=\"list-wrap\">");

  var for__13 = 0;

  marko_forEach(input.users, function(user) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<div class=\"user-element group\"" +
      marko_attr("id", "" + user.user_id) +
      "><div class=\"col span_1_of_4\"><strong>Name</strong><br>" +
      marko_escapeXml(user.name) +
      "</div><div class=\"col span_1_of_4\"><strong>Reviews</strong><br>" +
      marko_escapeXml(user.reviews) +
      "</div><div class=\"col span_1_of_4\"><strong>Friends</strong><br>" +
      marko_escapeXml(user.friends) +
      "</div><div class=\"col span_1_of_4\"><strong>Stars</strong><br>" +
      marko_escapeXml(user.stars) +
      "</div></div>");
  });

  out.w("</div></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body><script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script><script src=\"/js/friends.js\"></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sputniks-app$1.0.0/public/templates/friends.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/core/await/reorderer-renderer"
    ]
  };
