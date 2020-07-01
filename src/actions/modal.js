import {MODAL_SHOW, MODAL_HIDE} from "./actionType";


export const modalShow = (id) => {
	console.log("action modalShow")
	return {
		type: MODAL_SHOW, id
	}
}

export const modalHide = () => {
	return {
		type: MODAL_HIDE
	}
}
