google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart(values) {

    if(values != undefined) {
        $("#bar_chart").empty();
        //let t = [['Top Cuisines', '$', '$$', '$$$', '$$$$']];
        let d = [];
        d.push(['Top Cuisines', '$', '$$', '$$$', '$$$$']);
        let length = Object.keys(values).length;
        for(let i=0; i< length; i++) {
            let one = values[Object.keys(values)[i]].one;
            let two = values[Object.keys(values)[i]].two;
            let three = values[Object.keys(values)[i]].three;
            let four = values[Object.keys(values)[i]].four;
            if(!(one === 0 && two === 0 && three === 0 && four === 0)) {
                d.push([values[Object.keys(values)[i]].name, one, two, three, four]);
            }
        }

        if(d.length !== 1) {
            var data = google.visualization.arrayToDataTable(d);
            var chart = new google.charts.Bar(document.getElementById('bar_chart'));
            var options = {
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
            };
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }

        // var data = google.visualization.arrayToDataTable([
        //     ['Top Cuisines', '$', '$$', '$$$', '$$$$'],
        //     [values[Object.keys(values)[1]].name, values[Object.keys(values)[1]].one, values[Object.keys(values)[1]].two, values[Object.keys(values)[1]].three, values[Object.keys(values)[1]].four],
        //     [values[Object.keys(values)[2]].name, values[Object.keys(values)[2]].one, values[Object.keys(values)[2]].two, values[Object.keys(values)[2]].three, values[Object.keys(values)[2]].four],
        //     [values[Object.keys(values)[3]].name, values[Object.keys(values)[3]].one, values[Object.keys(values)[3]].two, values[Object.keys(values)[3]].three, values[Object.keys(values)[3]].four]
        // ]);




    }
}
