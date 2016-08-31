new pvc.BarChart({
    canvas: "cccExample",
    width:  600,
    height: 400,    
    title: "Bar chart with target lines",
    animate:    true,
    selectable: true,
    hoverable:  true,
    legend:     true,

    plot2: true,
    plot2Series: ['Paris', 'London'],
    plot2LinesVisible: false,
    
    barSizeMax: 20,
    orthoAxisOffset: 0.01,
    extensionPoints: {
        plot2Dot_shape: 'bar',
        plot2Dot_shapeSize: function() {
            // Need to provide a default for when bar series are hidden
            var diam = this.chart.plotPanels.bar.barWidth ||
                       this.chart.options.barSizeMax;
            
            // "finished(.)" prevents that, when hovered,
            // the size of the target lines increase
            return this.finished(diam);
        },
        plot2Dot_shapeAngle: function() {
            return this.chart.isOrientationHorizontal() ? 0 : -Math.PI/2;
        },
        legend2Dot_shapeAngle: function() { // not being inherited?
            return this.chart.isOrientationHorizontal() ? 0 : -Math.PI/2;
        }
    }
})
.setData(relational_01, { crosstabMode: false })
.render();