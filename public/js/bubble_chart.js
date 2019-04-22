
// dataset = {
//         "children": [{"Name":"Indian","Count":23},
//             {"Name":"Mexican","Count":12},
//             {"Name":"Italian","Count":23},
//             {"Name":"Thai","Count":11},
//             {"Name":"German","Count":34},
//             {"Name":"Canadian","Count":12},
//             {"Name":"Hungarian","Count":28}]
//     };
const MAX_STRING_LENGTH = 20;
window.drawBubble = function (dataset) {
    console.log(dataset);
    $(".column .column-content").empty();
    let diameter = document.getElementsByClassName("column")[0].getBoundingClientRect().width;
    let height = document.getElementById("chart-med").getBoundingClientRect().height;
    let margin = {top: 20, right: 20, bottom: 20, left: 20};
    let color = d3.scaleOrdinal(d3.schemeCategory20);

    let bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    let svg = d3.select(".column .column-content")
        .append("svg")
        .attr("width", diameter)
        .attr("height", height)
        .attr("margin", margin)
        .attr("class", "bubble");

    let nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    let node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.length > MAX_STRING_LENGTH ? d.data.Name.substring(0, d.r / 3) + '..' : d.data.Name;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/4;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/4;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}