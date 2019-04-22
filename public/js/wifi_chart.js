google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(data) {
    console.log("Data:", data);
    var data = google.visualization.arrayToDataTable([
        ['Wifi', 'Free Wifi', 'Paid Wifi', 'No wifi', 'No Info'],
        [data.city, data.free, data.yes, data.no, data.noInfo]
      ]);

      var options = {
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      };

    var chart = new google.charts.Bar(document.getElementById('chart-small'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}