var React = require("react");

var funnel = module.exports = React.createClass({
	render: function(){
		var self = this;
		var data = [];
		var colors = ["#65A0D6", "#494949", "#4F8D9D", "#898B8F", "#E6615D", "#CBD1D4", "#EA8D63", "#5E6063", "#9ECD75"];
		var options = {
		    width: 600,           // In pixels; defaults to container's width (if non-zero)
		    height: 600,          // In pixels; defaults to container's height (if non-zero)
		    bottomWidth: 1/4,     // The percent of total width the bottom should be
		    bottomPinch: 0,       // How many sections to pinch
		    isCurved: false,      // Whether the funnel is curved
		    curveHeight: 20,      // The curvature amount
		    fillType: "solid",    // Either "solid" or "gradient"
		    isInverted: false,    // Whether the funnel is inverted
		    hoverEffects: false,  // Whether the funnel has effects on hover
		    dynamicArea: true ,  // Whether the funnel should calculate the blocks by
		                          // the count values rather than equal heights
		    animation: 200,     // The load animation speed in milliseconds
		    label: {
		        fontSize: "16px", // Any valid font size
		        fill: "#fff",      // Any valid hex color
		        fontWeight:700
		    }
		}
		if(this.props.salePrice){
			this.props.breakdown.forEach(function(cost, index){
				data.push([cost.displayName, cost.percentage * self.props.salePrice, colors[index]]);
			});
			var chart = new D3Funnel("#funnel");
			chart.draw(data, options);
		}

		return (
			<div id="funnel">
			</div>
		)
	}
})