// var diameter = 500, //max size of the bubbles
//     color    = d3.color("steelblue"); //color category
//
//
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");
//
// d3.csv("public/csv/biostats.csv", function(error, data){
//
//     //convert numerical values from strings to numbers
//     data = data.map(function(d){ d.value = +d["name"]; return d; });
//
//     //bubbles needs very specific format, convert data to this.
//     var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });
//
//     //setup the chart
//     var bubbles = svg.append("g")
//         .attr("transform", "translate(0,0)")
//         .selectAll(".bubble")
//         .data(nodes)
//         .enter();
//
//     //create the bubbles
//     bubbles.append("circle")
//         .attr("r", function(d){ return d.r; })
//         .attr("cx", function(d){ return d.x; })
//         .attr("cy", function(d){ return d.y; })
//         .style("fill", function(d) { return color(d.value); });
//
//     //format the text for each bubble
//     bubbles.append("text")
//         .attr("x", function(d){ return d.x; })
//         .attr("y", function(d){ return d.y + 5; })
//         .attr("text-anchor", "middle")
//         .text(function(d){ return d["Fruit"]; })
//         .style({
//             "fill":"white",
//             "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
//             "font-size": "12px"
//         });
// })