var map_button = document.getElementsByClassName('map-button').item(0);
var b_chart_button = document.getElementsByClassName('bubble-button').item(0);
var game_button = document.getElementsByClassName('game-button').item(0);

var map_panel = document.getElementsByClassName('map-container').item(0);
var b_chart_panel = document.getElementsByClassName('bubble-chart').item(0);
var game_panel = document.getElementsByClassName('game-panel').item(0);


console.log(map_button)

map_button.onclick = function(){
  map_button.className = "map-button selected";
  b_chart_button.className = "bubble-button";
  game_button.className = "bubble-button";
  map_panel.className = "map-container center-panel";
  b_chart_panel.className = "bubble-chart right-panel";
  game_panel.className = "game-panel right-panel";
}

b_chart_button.onclick = function(){
  b_chart_button.className = "bubble-button selected";
  map_button.className = "map-button";
  game_button.className = "bubble-button";
  map_panel.className = "map-container map-panel";
  b_chart_panel.className = "bubble-chart center-panel";
  game_panel.className = "game-panel right-panel";
}

game_button.onclick = function() {
    game_button.className = "bubble-button selected";
    map_button.className = "map-button";
    b_chart_button.className = "bubble-button";
    b_chart_panel.className = "bubble-chart map-panel";
    map_panel.className = "map-container map-panel";
    game_panel.className = "game-panel center-panel";

}
