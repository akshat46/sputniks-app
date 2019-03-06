feather.replace();

var map;
var geocoder;

function initMap() {
  console.log("here");
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.334594, lng: -121.882195},
    zoom: 14
  });

  var marker1 = {lat: 37.326985, lng:-121.906920};
  var marker2 = {lat: 37.315988, lng:-121.892068};
  var marker3 = {lat: 37.332917, lng:-121.871521};
  var marker4 = {lat: 37.343561, lng:-121.884233};

  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Restaurant 1'
  });

  var marker2 = new google.maps.Marker({
    position: marker2,
    map: map,
    title: 'Restaurant 2'
  });

  var marker3 = new google.maps.Marker({
    position: marker3,
    map: map,
    title: 'Restaurant 3'
  });

  var marker4 = new google.maps.Marker({
    position: marker4,
    map: map,
    title: 'Restaurant 4'
  });
}

var location_button = document.getElementsByClassName('location-button').item(0);
var location_field = document.getElementsByClassName('location-field').location;
var lat;
var lng;

location_button.onclick = function(){
  geocoder.geocode( { 'address': location_field.value}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
      map.setCenter({lat:lat, lng:lng});
    }
  });
}
