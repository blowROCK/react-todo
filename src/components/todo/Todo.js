import React, { Component } from "react";
import Calendars from "../calendar/Calendars";
import { connect } from 'react-redux';
import { generatorID } from "../../features/util";
import './Todo.css';
import TodoItem from "./todo-item";

import {modalShow} from "../../actions/modal";
import {todoToggleDone, todoToggleImportant} from '../../actions/todo';

class TodoComponent extends Component{
	constructor(props) {
		super(props);
		this.onAddBtn = this.onAddBtn.bind(this);
		this.onModifyTodo = this.onModifyTodo.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleDone = this.onToggleDone.bind(this);
	}
	onAddBtn(e){
		e.preventDefault()
		this.props.modalShow(generatorID(), undefined);
	}
	onModifyTodo(e, id, text){
		this.props.modalShow(id, text);
	}
	onToggleImportant(e, id){
		e.stopPropagation();
		this.props.todoToggleImportant(id);
	}
	onToggleDone(e, id){
		e.stopPropagation();
		this.props.todoToggleDone(id);
	}
	render(){
		return(
			<div className="todo" id="todo">
				<div className="todo__container">
					<div className="todo__container__header">
						<div id="addItemBtn"  onClick={this.onAddBtn} className="todo__container__contents__header__btn">
							<i className="fa fa-plus"/>
						</div>
						<Calendars/>
					</div>
					<div className="todo__container__contents">
						<div className="todo__container__contents__todoList">
							<div id="do" className="todo__container__contents__todoList">
								<div className="todoList__title do">To Do</div>
								<ul id="doUl">
									{this.props.toDos
										.filter((todo) => todo.date === this.props.calendars.SelectedDate)
										.sort((a,b) => (a.important === b.important ) ? 0 : a.important? -1 : 1)
										// eslint-disable-next-line array-callback-return
										.map((toDo) => {
										if (toDo && !toDo.done)
											return (
												<TodoItem 
												{...toDo}
												key={toDo.id}  
												onModifyTodo={(e)=>this.onModifyTodo(e, toDo.id, toDo.text)}
												onToggleDone={(e)=>this.onToggleDone(e, toDo.id)}
												onToggleImportant={(e)=>this.onToggleImportant(e, toDo.id)}
												/>
											)
										})
									}
								</ul>
							</div>
							<div id="done" className="todo__container__contents__todoList">
								<div className="todoList__title done">Done</div>
								<ul id="doneUl">
									{this.props.toDos
										.filter((todo) => todo.date === this.props.calendars.SelectedDate)
										// eslint-disable-next-line array-callback-return
										.map((toDo) => {
											if (toDo && toDo.done) {
												return (
													<TodoItem
														{...toDo}
														key={toDo.id}
														onModifyTodo={(e) => this.onModifyTodo(e, toDo.id)}
														onToggleDone={(e) => this.onToggleDone(e, toDo.id)}
														onToggleImportant={(e) => this.onToggleImportant(e, toDo.id)}
													/>
												)
											}
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return{
		todoToggleDone: id => dispatch(todoToggleDone(id)),
		todoToggleImportant: id => dispatch(todoToggleImportant(id)),
		modalShow: (id, text) => dispatch(modalShow(id, text)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (TodoComponent);