google.charts.load('current', { 'packages': ['map'], 'mapsApiKey': 'AIzaSyCwZId38T-ogdP11BteYHX54DKrwq9KOGs' });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
        var data = google.visualization.arrayToDataTable([
            ['Lat', 'Long', 'Name'],
            [37.4232, -122.0853, 'Work'],
            [37.4289, -122.1697, 'University'],
            [37.6153, -122.3900, 'Airport'],
            [37.4422, -122.1731, 'Shopping']
          ]);
  
      var options = {
        showTooltip: true,
        mapType: "normal",
        showInfoWindow: true,
        icons: {
            default: {
              normal: 'src/images/marker1.png',
              selected: 'src/images/marker2.png'
            },
          }
      };
  
      var map = new google.visualization.Map(document.getElementById('map-card'));
  
      map.draw(data, options);
  };

