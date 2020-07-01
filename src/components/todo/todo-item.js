import React from "react";
import { connect } from 'react-redux';

function TodoItem(props) {
	console.log("todoItem: ", props)
	// const toDo = props.toDos;
	function toggleDone(e) {

	}
	function toggleImportant(e) {

	}
	return(
		<li id="todoItem" className={`fa ${(toDo.isDone) ? 'done' : 'do' }`}>
			<span onClick={toggleDone} className={`fa ${toDo.isDone ? 'fa-check-circle-o' : 'fa-circle-o'}`}></span>
			<span onClick={toggleImportant} className={`fa ${toDo.isImportant ? 'fa-star' : 'fa-star-o'}`}></span>
			<div>{toDo.text}</div>
		</li>
	)
}
function mapStateToProps(state, ownProps) {
	return { sjmsms: state.toDos }
}
export default connect(mapStateToProps) (TodoItem);