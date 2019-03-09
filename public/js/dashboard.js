var map_button = document.getElementsByClassName('map-button').item(0);
var b_chart_button = document.getElementsByClassName('bubble-button').item(0);
var game_button = document.getElementsByClassName('game-button').item(0);
var food_preference_button = document.getElementsByClassName('food-preference-button').item(0);

var map_panel = document.getElementsByClassName('map-container').item(0);
var b_chart_panel = document.getElementsByClassName('bubble-chart').item(0);
var game_panel = document.getElementsByClassName('game-panel').item(0);
var food_preference_panel = document.getElementsByClassName('food-preference-panel').item(0);

map_button.onclick = function(){
  map_button.className = "map-button selected";
  b_chart_button.className = "bubble-button";
  game_button.className = "bubble-button";
  food_preference_button.className = "food-preference-button";
  map_panel.className = "map-container center-panel";
  b_chart_panel.className = "bubble-chart right-panel";
  game_panel.className = "game-panel right-panel";
  food_preference_panel.className = "food-preference-panel right-panel";
}

b_chart_button.onclick = function(){
  b_chart_button.className = "bubble-button selected";
  map_button.className = "map-button";
  game_button.className = "bubble-button";
  food_preference_button.className = "food-preference-button";
  map_panel.className = "map-container left-panel";
  b_chart_panel.className = "bubble-chart center-panel";
  game_panel.className = "game-panel right-panel";
  food_preference_panel.className = "food-preference-panel right-panel";
}

game_button.onclick = function() {
  game_button.className = "bubble-button selected";
  map_button.className = "map-button";
  b_chart_button.className = "bubble-button";
  food_preference_button.className = "food-preference-button";
  b_chart_panel.className = "bubble-chart left-panel";
  map_panel.className = "map-container left-panel";
  game_panel.className = "game-panel center-panel";
  food_preference_panel.className = "food-preference-panel right-panel";
}

food_preference_button.onclick = function() {
    food_preference_button.className = "food-preference-button selected";
    game_button.className = "bubble-button";
    map_button.className = "map-button";
    b_chart_button.className = "bubble-button";
    b_chart_panel.className = "bubble-chart left-panel";
    map_panel.className = "map-container left-panel";
    game_panel.className = "game-panel left-panel";
    food_preference_panel.className = "food-preference-panel center-panel";
}

// static map dialog

var saved_maps = [];
var map_src = "";
var id = 0;

$(".snapshot-button").click(function(){
  generate_map(14);
  init_dialog();
  $(".custom-dialog #close").click(function(){
    $(".custom-dialog").empty();
  });
});

function generate_map(zoom_value){
  let map_src = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCzGa6kea5GkeVEBjPTEUMq2bwz_X0MoNA&size=700x560';
  var center = '&center=';
  var zoom = '&zoom=';
  var lat = map.getCenter().lat();
  var lng =  map.getCenter().lng();
  center += lat + ',' + lng;
  map_src += center;
  var z = zoom + zoom_value;
  map_src += z;
  return map_src;
}

function init_dialog(){
  map_src = generate_map(14);
  var close_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  var save_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>';
  $(".custom-dialog").html(
    '<div id="bg"></div><div id="content"><div id="close">'+ close_svg + '</div><div class="static-control-panel"><div class="zoom-title">Selected Zoom Level: Normal</div><div class="zoom-slider"></div><div class="static-save-button">' + save_svg + '</div></div><img class="static-map" src="' + generate_map(14) + '"/></div>'
  );

  $(".static-save-button").click(function(){
    $(".custom-dialog").empty();
    id += 1;
    let map_obj = {src: map_src, id: id};
    saved_maps.push(map_obj);

    var $draggable = $( '<div class="saved-map" id="' + id + '"></div>' );
    var $address = $('<div class="address"></div>');
    $draggable.append($address);
    $("body").append($draggable);

    let $map_preview = $('<div class="map_preview"></div>');
    $("body").append($map_preview);

    geocoder.geocode({'location': map.getCenter()}, function(results, status) {
      if (results[0]) {
        $address.text(results[0].formatted_address);
      } else {
        window.alert('No results found');
      }
    });
    setDraggable();
  });

  $(".zoom-slider").slider({
    min: 1,
    max: 3,
    value: 2,
    stop: function( event, ui){
      if(ui.value ==1){
        $(".zoom-title").text("Selected Zoom Level: Far");
        $('.static-map').removeAttr("src").attr("src", generate_map(10));
        map_src = generate_map(10);
      }
      if(ui.value == 2){
        $(".zoom-title").text("Selected Zoom Level: Normal");
        map_src = generate_map(14);
        $(".static-map").removeAttr("src").attr("src", generate_map(14));
      }
      if(ui.value == 3){
        $(".zoom-title").text("Selected Zoom Level: Near");
        map_src = generate_map(18);
        $(".static-map").removeAttr("src").attr("src", generate_map(18));
      }
    }
  });
}

function setDraggable(){
  var direction;
  var lastx = 0;
  var moving = false;

  $( ".saved-map" ).draggable({
    addClasses: false,
    start: function(){moving = true;},
    drag: function(){
      var xPos = $(this).offset().left;
      var dx = xPos - lastx;
      if(dx > 0){
        $(this).css({'transform' : 'rotate(8deg)'});
      }
      else if(dx <= 0){
        $(this).css({'transform' : 'rotate(-8deg)'});
      }
      lastx = xPos;
    },
    stop: function(){
      moving = false;
      lastx = 0;
      $(this).css({'transform' : 'rotate(0)'});
    }
  });

  $(".saved-map").click(function(){
    if(!moving){
      for(map of saved_maps){
        if(map.id==$(this).attr('id')){
          let img_src = map.src;
          $(".map_preview").prepend('<img src = "' + img_src + '" />');
          $(".map_preview").dialog({
            width: 680, height:600,
            close: function(){
              $(".map_preview").empty();
            }
          });
        }
      }
    }
  });
}


$(".food-preference-button").click(init);


var disabledSlots = 0;
function init() {

    $('#selectionPile').html( '' );
    $('#selectionSlots').html( '' );

    var food_choices = [ "Maxican", "Indian", "Italian", "French", "Thai", "Any other, You can add it later" ];

    for ( var i=0; i<6; i++ ) {
        $('<div>' + food_choices[i] + '</div>').data( 'number', food_choices[i] ).attr( 'id', 'card'+i ).appendTo( '#selectionPile' ).draggable( {
            containment: '#content',
            stack: '#selectionPile div',
            cursor: 'move',
            revert: true
        } );
    }

    var preferences = [ '1st', '2nd', '3rd', '4th', '5th','All other' ];
    for ( var i=1; i<=6; i++ ) {
        $('<div>' + preferences[i-1] + '</div>').data( 'number', i ).appendTo( '#selectionSlots' ).droppable( {
            accept: '#selectionPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        } );
    }

}

function handleCardDrop(event, ui) {

        ui.draggable.addClass('addColor');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        ui.draggable.draggable('option', 'revert', false);
        disabledSlots++;
        if(disabledSlots === 6)
            alert("Your response has been recorded");
}

