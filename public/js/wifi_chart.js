// google.charts.load('current', {'packages':['bar']});
// // google.charts.setOnLoadCallback(drawChart);

// function drawChart(data) {
//     console.log("Data:", data);
//     var data = google.visualization.arrayToDataTable([
//         ['Wifi', 'Free Wifi', 'Paid Wifi', 'No wifi', 'No Info'],
//         [data.city, data.free, data.yes, data.no, data.noInfo]
//       ]);

//       var options = {
//         legend: { position: 'top', maxLines: 3 },
//         bar: { groupWidth: '75%' },
//         isStacked: true
//       };

//     var chart = new google.charts.Bar(document.getElementById('chart-small'));

//     chart.draw(data, google.charts.Bar.convertOptions(options));
// }

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawWifiChart);

function drawWifiChart(data) {

    $("#chart-wifi").empty();
    let width = $("#chart-wifi").width();
    let heigth = document.getElementById("chart-wifi").getBoundingClientRect().height ==0 ? 210 : $("#chart-wifi").width();

    if(data != undefined) {
        $("#chart-wifi").empty();
        var displayData = google.visualization.arrayToDataTable([
            ['WiFi Group', 'Number of Restaurants'],
            ['Free Wifi', data.free],
            ['Paid Wifi', data.yes],
            ['No wifi', data.no],
            ['No Info', data.noInfo]
        ]);

        var options = {
            title: 'WiFi options in '+ data.city,
            'width':width,
            'height':heigth
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart-wifi'));

        chart.draw(displayData, options);
    }

}
