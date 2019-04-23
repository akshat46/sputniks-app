google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart(values) {
    let t = [['Top Cuisines', '$', '$$', '$$$', '$$$$']];

    var data = google.visualization.arrayToDataTable([
        ['Top Cuisines', '$', '$$', '$$$', '$$$$'],
        [values[Object.keys(values)[0]].name, values[Object.keys(values)[0]].one, values[Object.keys(values)[0]].two, values[Object.keys(values)[0]].three, values[Object.keys(values)[0]].four],
        [values[Object.keys(values)[1]].name, values[Object.keys(values)[1]].one, values[Object.keys(values)[1]].two, values[Object.keys(values)[1]].three, values[Object.keys(values)[1]].four],
        [values[Object.keys(values)[2]].name, values[Object.keys(values)[2]].one, values[Object.keys(values)[2]].two, values[Object.keys(values)[2]].three, values[Object.keys(values)[2]].four],
        [values[Object.keys(values)[3]].name, values[Object.keys(values)[3]].one, values[Object.keys(values)[3]].two, values[Object.keys(values)[3]].three, values[Object.keys(values)[3]].four]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('bar_chart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
