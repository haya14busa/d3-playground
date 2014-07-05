(function() {
    /*
     * 1. Select
     *    - text,attr,style,append,remove
     *
     */
    var p = d3.select("body").selectAll("p");

    p.text("Happy Vimming!")
     .style({
         "font-size": "38px",
         "color": "#383838",
     })
     .style("font-size", function() {
         return Math.max(Math.floor(Math.random() * 32), 8) + "px";
     });

    // var dataset = [12, 24, 36, 48];
    var dataset = [12, 24];

    // p.data(dataset).text(function(d) {
    // p.data(dataset).text(function(d, i) {
    //     return i + "th : " + d * 2;
    // });

    var update = p.data(dataset);
    var enter = update.enter();
    var exit = update.exit();

    update.text(function(d) {
        return "update: " + d;
    });

    enter.append('p').text(function(d) {
        return "enter: " + d;
    });

    exit.style('color', 'red'); //.remove

    /*
     * SVG
     */
    var dataset = [11, 25, 45, 30, 33]; // radius

    var w = 500;
    var h = 200;

    var svg = d3.select('body').append('svg').attr({width: w, height: h});

    svg.selectAll('circle')
       .data(dataset) // data biding
       .enter()
       .append('circle')
       .transition() // millsecond
       .delay(function(d, i) {
           return i * 300;
       }) // shift
       .duration(2000)
       .ease('bounce')
       .each('start', function() {
           d3.select(this).attr({
               fill: 'green',
               r: 0,
               cy: h
           });
       })
       .attr({
           cx: function(d, i) { return  50 + (i * 100); },
           cy: h / 2,
           r: function(d) { return d;},
           fill: 'red'
       })
       .each('end', function() {
           d3.select(this)
             .transition()
             .duration(300)
             .attr({
                 fill: 'pink',
                 r: 0,
                 cy: 0
             });
       });

    /*
     * SVG
     */
    var dataset = [11, 25, 45, 30, 33]; // radius

    var w = 500;
    var h = 200;

    var svg2 = d3.select('body').append('svg').attr({width: w, height: h});

    svg2.selectAll('circle')
       .data(dataset)
       .enter()
       .append('circle')
       .on('mouseover', function(d) {
           d3.select(this).attr('fill', 'orange');
       })
       .on('mouseout', function(d) {
           d3.select(this).attr('fill', 'red');
       })
       .on('click', function(d) {
           var rs = d3.select(this).attr('r');
           console.log(rs);
       })
       .attr({
           cx: function(d, i) { return 50 + (i * 100); },
           cy: h / 2,
           r: function(d) { return d; },
           fill: 'red'
       });

    var svg3 = d3.select('body').append('svg').attr({width: w, height: h});

    var xScale = d3.scale.linear()
                         .domain([0, d3.max(dataset)])
                         .range([0, w])
                         .nice();

    svg3.selectAll('rect')
       .data(dataset)
       .enter()
       .append('rect')
       .attr({
           x: 0,
           y: function(d, i) { return i * 40; },
           width: function(d) { return xScale(d); },
           height: 30,
           fill: 'blue'
       });

})();
