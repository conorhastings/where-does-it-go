var React = require("react");

var input = module.exports = React.createClass({
	render: function(){
		return (
			<input type="text" style={this.props.style} onKeyDown = {this.props.handleKeyPress} />
		)
	}
})