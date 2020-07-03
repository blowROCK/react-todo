import React, { Component } from "react";
import { connect } from 'react-redux';
import CarlendarItem from './Calendar-item';
import {selectDate} from '../../actions/calendars'
import {yyyy_mm_dd} from "../../features/util";

class Calendars extends Component{
	constructor(props) {
		super(props);
		this.selectedDate = new Date(this.props.calendars.SelectedDate);
		this.state = {
			dayWeekEng : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			monthNameEng : {
				1: "January",
				2: "February",
				3: "March",
				4: "April",
				5: "May",
				6: "June",
				7: "July",
				8: "August",
				9: "September",
				10: "October",
				11: "November",
				12: "December",
			},
			CurrentDate: new Date(this.props.calendars.CurrentDate),
			SelectedDate: this.selectedDate,
			year: this.selectedDate.getFullYear(),
			month: this.selectedDate.getMonth() + 1,
			today: this.selectedDate.getDate(),
			dayOfWeek: this.selectedDate.getDay()
		}
	}
	isToday(date){
		return this.state.CurrentDate.toDateString() === date.toDateString();
	}
	isSelected(date){
		return this.state.SelectedDate.toDateString() === date.toDateString();
	}
	getDayOfThisWeek(index){
		const time = new Date(this.state.SelectedDate);
		const date = this.state.today - this.state.dayOfWeek + index;
		return new Date(time.setDate(date));
	}
	onSelectDate(e, date){
		e.preventDefault();
		this.props.selectDate(yyyy_mm_dd(date));
	}
	onGoToPrevWeek(e){
		e.preventDefault();
		this.props.selectDate(yyyy_mm_dd(this.getDayOfThisWeek(-1)));
	}
	onGoToNextWeek(e){
		e.preventDefault();
		this.props.selectDate(yyyy_mm_dd(this.getDayOfThisWeek(+7)));
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps !== this.props) {
			this.selectedDate = new Date(this.props.calendars.SelectedDate);
			this.setState({
				CurrentDate: new Date(this.props.calendars.CurrentDate),
				SelectedDate: this.selectedDate,
				year: this.selectedDate.getFullYear(),
				month: this.selectedDate.getMonth() + 1,
				today: this.selectedDate.getDate(),
				dayOfWeek: this.selectedDate.getDay()
			})
		}
	}
	render() {
		return (
			<div className="Carlendar" id="Carlendar">
				<div id="year" className="todo__container__header__year">{this.state.year}</div>
				<div id="month" className="todo__container__header__month">{this.state.monthNameEng[this.state.month]}</div>
				<div className="todo__container__header__week">
					<div id="left" onClick={this.onGoToPrevWeek.bind(this)} className="todo__container__header__week__arrows ">
						<div>
							{`<`}
						</div>
					</div>
					<ul id="week" className="todo__container__header__week__days">{}
						{
							this.state.dayWeekEng.map((day, index) => {
								const tempDay = this.getDayOfThisWeek(index);
								return (
									<CarlendarItem key={tempDay}
												   day={day}
												   tempDay={tempDay}
												   isToday={this.isToday(tempDay)}
												   isSelected={this.isSelected(tempDay)}
												   onSelectDate={(e)=>this.onSelectDate(e, tempDay)}
									/>
								)
							}
						)}
					</ul>
					<div id="right" onClick={this.onGoToNextWeek.bind(this)} className="todo__container__header__week__arrows right">
						<div>{`>`}</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return{
		selectDate: date => dispatch(selectDate(date))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Calendars);
