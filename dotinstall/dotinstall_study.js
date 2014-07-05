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

})();
