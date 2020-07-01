import { MODAL_SHOW, MODAL_HIDE } from "../actions/actionType";

const modalInit = {
	isModalOpen: false
}

const modal = function (state = modalInit, action) {
	console.log("modal reducer : ", action.type)
	switch (action.type) {
		case MODAL_SHOW:
			return { ...state, isModalOpen: true, id: action.id };
		case MODAL_HIDE:
			return { ...state, isModalOpen: false };
		default:
			return state;
	}
}
export default modal;