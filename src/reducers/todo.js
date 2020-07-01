import update from 'react-addons-update';
import {TODO_DELETE, TODO_ADD, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT} from "../actions/actionType";

const toDos = function(state = [] , action) {

	console.log( "toDostoDos 리듀서 : ", state, action)
	switch(action.type) {
		case TODO_ADD:
			return [{
				id: action.id,
				text: action.text,
				done: false,
				important: false
			}, ...state];
		case TODO_DELETE:
			return state.filter( todo => {
				return todo.id !== action.id
			})
		case TODO_TOGGLE_DONE:
			return state.map(
			  todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		case TODO_TOGGLE_IMPORTANT:
			return state.map(
			  todo => todo.id === action.id ? { ...todo, important: !todo.important } : todo
			);
		default:
			return state ;
	}
}
export default toDos;