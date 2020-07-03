import React, { Component } from "react";

class CarlendarItem extends Component{
	constructor(props) {
		super(props);
		this.state = {
			today: this.props.isToday? 'TODAY':'',
			selected: this.props.isSelected? ' SELECTED': ''
		}
	}
	render() {
		return (
			<li id="dates" className={(this.props.isToday? 'TODAY':'')+(this.props.isSelected?' SELECTED':'')} onClick={this.props.onSelectDate}>
				<div>{this.props.day}</div>
				<div>{this.props.tempDay.getDate()}</div>
			</li>
		);
	}
}
export default CarlendarItem;
