import {MODAL_SHOW, MODAL_HIDE} from "./actionType";


export const modalShow = (id, text) => {
	return {
		type: MODAL_SHOW, id, text
	}
}
export const modalHide = () => {
	return {
		type: MODAL_HIDE
	}
}
