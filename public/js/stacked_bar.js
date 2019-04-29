window.drawPriceStacked = function (data) {
    var actualdata = $.extend(true,{},data);

    $("#chart-price-body").empty();

// set the dimensions and margins of the graph
    var margin = {top: 0, right: 0, bottom: 0, left: 100},
        width = 150,
        height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
    var svg = d3.select("#chart-price-body")
        .append("svg")
        .style("transform", "rotate(90deg)")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    // List of subgroups = header of the csv files = soil condition here
    var subgroups = ['one', 'two','three', 'four'];

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = ['PriceRange']

    // Add X axis
    var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0 ]);

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#ffcc80','#ffa726','#fb8c00', '#ef6c00'])

    // Normalize the data -> sum of each group must be 100!
    dataNormalized = []
    data.forEach(function(d){
        // Compute the total
        tot = 0
        for (let i in subgroups){ let name=subgroups[i] ; tot += +d[name] }
        // Now normalize
        for (let i in subgroups){ let name=subgroups[i] ; d[name] = d[name] / tot * 100}
    })

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroups)
        (data);

    // Show the bars
    svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter()
        .append("g")
        .attr('class', function(d) { return d.key})
        .style("fill", function(d) {
            return color(d.key);
        })
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function(d) {
            return x(d.data.group);
        })
        .attr("y", function(d) {
            return y(d[1]);
        })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth())
        .on("mouseover", function() { tooltip.style("display", null); })
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d) {
            let currentKey = d3.select(this.parentNode).attr('class');
            var xPosition = d3.mouse(this)[0] - 15;
            var yPosition = d3.mouse(this)[1] - 25;
            tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
            tooltip.select("text").text(actualdata[0][currentKey]);
        });;


    // Prep the tooltip bits, initial display is hidden
    var tooltip = d3.select("#chart-price-body svg").append("g")
        .attr("class", "tooltip")
        .style("display", "none");

    tooltip.append("rect")
        .attr("width", 30)
        .attr("height", 20)
        .attr("fill", "white")
        .style("opacity", 0.5);

    tooltip.append("text")
        .attr("x", 15)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold");


    $(".chart-price-container .legend ul li").each(function (d, i) {
        let key = this.className;
        if (actualdata[0][key] == 0) {
            $(this).fadeOut();
        }
        else {
            $(this).fadeIn();
        }
    });

}
