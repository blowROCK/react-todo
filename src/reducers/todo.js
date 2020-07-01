import update from 'react-addons-update';
import {TODO_DELETE, TODO_ADD, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT} from "../actions/actionType";

const todoInit = [];

const toDos = function(state= todoInit , action) {
	switch(action.type) {
		case TODO_ADD:
			return	[{
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
			return state.map((todo) => {
				if(todo.id === action.id){
					todo.done = !todo.done;
				}
			})
		case TODO_TOGGLE_IMPORTANT:
			return state.map((todo) => {
				if(todo.id === action.id){
					todo.important = !todo.important;
				}
			})
		default:
			return state ;
	}
}
export default toDos;