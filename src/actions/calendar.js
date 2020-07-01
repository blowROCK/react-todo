import {
	CURRENT_DATE,
	SELECT_DATE
} from './actionType';


export const currDate = (date) => {
	return {
		type: CURRENT_DATE, date
	}
}

export const selectDate = (date) => {
	return {
		type: SELECT_DATE, date
	}
}