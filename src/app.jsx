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
					percentage:.63,
					displayName: "Salary"
				},
				{
					percentage:.081,
					displayName: "Other"
				},
				{
					percentage:.06, 
					displayName:"Advertising"
				},
				{
					percentage:.06,
					displayName:"Travel/Conferences"
				},
				{
					percentage:.06,
					displayName: "Insurance/Legal"
				},
				{
					percentage:.053,
					displayName:"Rent"
				},
				{
					percentage:.026,
					displayName:"Online Services"
				}, {
					percentage:.015,
					displayName:"Office Supplies"
				},

				{
					percentage: .013,
					displayName: "Internet/Phone"
				}
			]
		};	
	},

	handleClick: function() {
		var salePrice = parseInt(this.refs.price.getDOMNode().value.replace(/\W+/g, " ").split(" ").join(""));
		this.setState({salePrice: salePrice});
		if(salePrice > 9999) {
			React.findDOMNode(this.refs.killedIt).play();
		}
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
		var killedIt = <audio ref="killedIt" src="http://conorhastings.com/where-does-it-go/killedit.m4a"></audio>
		return (
			<div style={style}>
				<h1>Enter Sale Price</h1>
				<div>
					<Input ref={"price"} style={inputStyle} handleKeyPress={this.handleKeyPress} placeholder={"Enter Sale Price"} />
				</div>
				<div>
					<Button style={buttonStyle} buttonText={"Get Breakdown!"} handleClick={this.handleClick} />
				</div>
				<div>
					<Funnel breakdown={this.props.breakdown} salePrice = {this.state.salePrice} />
				</div>
				<div>{killedIt}</div>
			</div>
		)
	}
})