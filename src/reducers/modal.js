import {MODAL_SHOW, MODAL_HIDE} from "../actions/actionType";

const modalInit = {
	isModalOpen: false
}

const modal = function (state = modalInit, action) {
	switch (action.type) {
		case MODAL_SHOW:
			return { ...state, isModalOpen: true, id: action.id , text: action.text};
		case MODAL_HIDE:
			return { ...state, isModalOpen: false, id: '', text: '' };
		default:
			return state;
	}
}
export default modal;