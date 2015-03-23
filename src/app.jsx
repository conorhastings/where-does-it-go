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
					percentage:.1,
					displayName:"Culture Programs"
				},
				{
					percentage:.1,
					displayName: "Candy"
				}
			]
		};	
	},

	handleClick: function() {
		console.log(this.refs.price.getDOMNode().value.replace(/\W+/g, " "));
		this.setState({salePrice: parseInt(this.refs.price.getDOMNode().value.replace(/\W+/g, " ").split(" ").join(""))})
	},

	handleKeyPress: function(e) {
		if(e.which === 13){
			this.handleClick();
		}
	},

	render: function() {
		var inputStyle = {width:"400px", height:"50px", border:"none", borderRadius:"3px", marginBottom:"10px", fontSize:"18px", padding:"10px", textAlign:"center"};
		var buttonStyle = {width:"300px", height:"50px", border:"none", borderRadius:"3px", backgroundColor:"#93CD75", marginBottom:"10px", fontWeight:"700"};	
		var style = {textAlign:"center"};
		return (
			<div style={style}>
				<h1>Where Does the Money Go?</h1>
				<div>
					<Input ref={"price"} style={inputStyle} handleKeyPress={this.handleKeyPress} placeholder={"Enter Sale Price"} />
				</div>
				<div>
					<Button style={buttonStyle} buttonText={"Get Breakdown!"} handleClick={this.handleClick} />
				</div>
				<div>
					<Funnel breakdown={this.props.breakdown} salePrice = {this.state.salePrice} />
				</div>
			</div>
		)
	}
})