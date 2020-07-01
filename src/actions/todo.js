import {
	TODO_ADD, TODO_DELETE, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT
} from "./actionType";

export const todoAdd = (id, text) => {
	return {
		type: TODO_ADD, id, text
	}
}

export const todoDelete = (index) => {
	return {
		type: TODO_DELETE, index
	}
}

export const todoToggleDone = (index) =>{
	return {
		type: TODO_TOGGLE_DONE, index
	}
}

export const todoToggleImportant = (index) =>{
	return {
		type: TODO_TOGGLE_IMPORTANT, index
	}
}