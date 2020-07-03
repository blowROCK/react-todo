import {
	CAL_SELETE_DATE,
	CAL_CURRENT_DATE
} from './actionType';


export const currDate = (date) => {
	return {
		type: CAL_CURRENT_DATE, date
	}
}

export const selectDate = (date) => {
	return {
		type: CAL_SELETE_DATE, date
	}
}