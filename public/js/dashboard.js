var map_button = document.getElementsByClassName('map-button').item(0);
var b_chart_button = document.getElementsByClassName('bubble-button').item(0);

var map_panel = document.getElementsByClassName('map-container').item(0);
var b_chart_panel = document.getElementsByClassName('bubble-chart').item(0);

console.log(map_button)

map_button.onclick = function(){
  map_button.className = "map-button selected";
  b_chart_button.className = "bubble-button";
  map_panel.className = "map-container center-panel";
  b_chart_panel.className = "bubble-chart right-panel"
}

b_chart_button.onclick = function(){
  b_chart_button.className = "bubble-button selected";
  map_button.className = "map-button";
  b_chart_panel.className = "bubble-chart center-panel"
  map_panel.className = "map-container left-panel";
}
