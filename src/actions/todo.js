import {
	TODO_ADD, TODO_DELETE, TODO_TOGGLE_DONE, TODO_TOGGLE_IMPORTANT
} from "./actionType";

export const todoAdd = (id, text) => {
	return {
		type: TODO_ADD, id, text
	}
}

export const todoDelete = (id) => {
	return {
		type: TODO_DELETE, id
	}
}

export const todoToggleDone = (id) =>{
	return {
		type: TODO_TOGGLE_DONE, id
	}
}

export const todoToggleImportant = (id) =>{
	console.log("action: ", id)
	return {
		type: TODO_TOGGLE_IMPORTANT, id
	}
}