import {CURRENT_DATE, SELECT_DATE} from "../actions/actionType";

const calendarInit = {
	CurrentDate: null,
	SelectedDate: null
};

const calendar = function(state= calendarInit , action) {
	switch(action.type) {
		case CURRENT_DATE:
			return Object.assign({}, state, {
				CurrentDate: action.date
			});
		case SELECT_DATE:
			return Object.assign({}, state, {
				SelectedDate: action.date
			});
		default:
			return state ;
	}
}

export default calendar