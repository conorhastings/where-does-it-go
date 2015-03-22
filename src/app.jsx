var React = require("react");
var Input = require("./input.jsx");
var Button = require("./button.jsx");
var Funnel = require("./funnel.jsx")

var app = module.exports = React.createClass({
	getInitialState: function() {
		return {
			salePrice: 0
		};
	},

	getDefaultProps: function() {
		return {
			breakdown: [
				{
					percentage:.4, 
					displayName:"Salary"
				},
				{
					percentage:.2,
					displayName:"Rent"
				},
				{
					percentage:.2,
					displayName: "Snacks"
				},
				{
					percentage:.2,
					displayName:"Culture Programs"
				}
			]
		};	
	},

	handleClick: function() {
		this.setState({salePrice: parseInt(this.refs.price.getDOMNode().value)})
	},

	handleKeyPress: function(e) {
		if(e.which === 13){
			this.handleClick();
		}
	},

	render: function() {
		console.log(this.state)
		var inputStyle = {width:"400px"};
		var buttonStyle = {width:"400px"};	
		return (
			<div>
				<Input ref={"price"} style={inputStyle} handleKeyPress={this.handleKeyPress} />
				<Button style={buttonStyle} buttonText={"Click Me"} handleClick={this.handleClick} />
				<Funnel breakdown={this.props.breakdown} salePrice = {this.state.salePrice} />
			</div>
		)
	}
})