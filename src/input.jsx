var React = require("react");

var input = module.exports = React.createClass({
	render: function(){
		return (
			<input type="text" placeholder={this.props.placeholder} style={this.props.style} onKeyDown = {this.props.handleKeyPress} />
		)
	}
})