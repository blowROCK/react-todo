import React from "react";

function TodoItem(props) {
	return(
		<li id={props.id} onClick={props.onModifyTodo} className={`fa ${(props.done) ? 'done' : 'do' }`}>
			<span onClick={props.onToggleDone} 
				className={`fa ${props.done ? 'fa-check-circle-o' : 'fa-circle-o'}`}>
			</span>
			<span onClick={props.onToggleImportant} 
				className={`fa ${props.important ? 'fa-star' : 'fa-star-o'}`}>
			</span>
			<div>{props.text}</div>
		</li>
	)
}
export default TodoItem;