import {TODO_SET, TODO_DELETE, TODO_ADD, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT, TODO_MODIFY } from "../actions/actionType";

const toDos = function(state = [] , action) {
	switch(action.type) {
		case TODO_SET:
			return action.toDos
		case TODO_ADD:
			return [{
				id: action.id,
				text: action.text,
				date: action.date,
				done: false,
				important: false
			}, ...state];
		case TODO_DELETE:
			return state.filter( todo => {
				return todo.id !== action.id
			})
		case TODO_MODIFY:
			return state.map(todo => todo.id === action.id ? { ...todo, text: action.text} : todo);
		case TODO_TOGGLE_DONE:
			return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
		case TODO_TOGGLE_IMPORTANT:
			return state.map((todo) => todo.id === action.id ? { ...todo, important: !todo.important } : todo);
		default:
			return state ;
	}
}
export default toDos;