import {CAL_CURRENT_DATE, CAL_SELETE_DATE} from "../actions/actionType";
import {yyyy_mm_dd} from "../features/util";

const calendarInit = {
	CurrentDate: yyyy_mm_dd(new Date()),
	SelectedDate: yyyy_mm_dd(new Date()),
};

const calendar = function(state= calendarInit , action) {
	switch(action.type) {
		case CAL_CURRENT_DATE:
			return Object.assign({}, state, {
				CurrentDate: action.date
			});
		case CAL_SELETE_DATE:
			return Object.assign({}, state, {
				SelectedDate: action.date
			});
		default:
			return state ;
	}
}

export default calendar