google.charts.load('current', { 'packages': ['map'] });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap(response) {

        if(response != undefined) {
            $("#map-card").empty();
            var markerData = [];
            markerData.push(['Lat', 'Long', 'Name']);
            response.result.forEach(element => {
                var marker = [];
                marker.push(element.lat);
                marker.push(element.long);
                marker.push(element.name);
                markerData.push(marker);
            });
            var data = google.visualization.arrayToDataTable(markerData);

            var options = {
                showTooltip: true,
                mapType: "normal",
                showInfoWindow: true,
                icons: {
                    default: {
                        selected: 'src/images/marker2.png'
                    },
                },
                zoomLevel : 10
            };

            var map = new google.visualization.Map(document.getElementById('map-card'));

            map.draw(data, options);
        }

  };

