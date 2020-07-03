import {
	TODO_SET, TODO_ADD, TODO_DELETE, TODO_MODIFY, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT
} from "./actionType";

export const todoSet = (toDos) => {
	return{
		type: TODO_SET, toDos
	}
}
export const todoAdd = (id, text, date) => {
	return {
		type: TODO_ADD, date, id, text
	}
}
export const todoDelete = (id) => {
	return {
		type: TODO_DELETE, id
	}
}
export const todoModify = (id, text) =>{
	return {
		type: TODO_MODIFY, id, text
	}
}
export const todoToggleDone = (id) =>{
	return {
		type: TODO_TOGGLE_DONE, id
	}
}

export const todoToggleImportant = (id) =>{
	return {
		type: TODO_TOGGLE_IMPORTANT, id
	}
}