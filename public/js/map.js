
function initMap() {
  console.log("here");
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
