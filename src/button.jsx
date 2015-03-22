var React = require("react");

var input = module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<button style={this.props.style} onClick = {this.props.handleClick}>{this.props.buttonText}</button>
			</div>
		)
	}
})