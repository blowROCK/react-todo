import React, { Component } from "react";
// import PropTypes from 'prop-types';
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
		this.props.modalShow(generatorID());
	}
	onModifyTodo(id){
		console.log("모디파이 :",id)
	}
	onToggleImportant(e, id){
		e.stopPropagation();
		console.log("토클버튼 onToggleImportant ",e, id )
		this.props.todoToggleImportant(id);
	}
	onToggleDone(e, id){
		e.stopPropagation();
		console.log("토클버튼 onToggleDone ",e,id)
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
						<div id="year" className="todo__container__header__year"></div>
						<div id="month" className="todo__container__header__month"></div>
						<div className="todo__container__header__week">
							<div id="left" className="todo__container__header__week__arrows ">
								<div>

								</div>
							</div>
							<ul id="week" className="todo__container__header__week__days"></ul>
							<div id="right" className="todo__container__header__week__arrows right">
								<div></div>
							</div>
						</div>
					</div>
					<div className="todo__container__contents">
						<div className="todo__container__contents__todoList">
							<div id="do" className="todo__container__contents__todoList">
								<div className="todoList__title do">To Do</div>
								<ul id="doUl">
									{this.props.toDos.map((toDo)=>{
										if (toDo && !toDo.done)
											return (
												<TodoItem 
												{...toDo}
												key={toDo.id}  
												onModifyTodo={(e)=>this.onModifyTodo(e, toDo.id)}
												onToggleDone={(e)=>this.onToggleDone(e, toDo.id)}
												onToggleImportant={(e)=>this.onToggleImportant(e, toDo.id)}
												/>
											)
									})}
								</ul>
							</div>
							<div id="done" className="todo__container__contents__todoList">
								<div className="todoList__title done">Done</div>
								<ul id="doneUl">
									{this.props.toDos.map((toDo)=>{
										if (toDo && toDo.done)
											return (
												<TodoItem 
												{...toDo}
												key={toDo.id}  
												onModifyTodo={(e)=>this.onModifyTodo(e, toDo.id)}
												onToggleDone={(e)=>this.onToggleDone(e, toDo.id)}
												onToggleImportant={(e)=>this.onToggleImportant(e, toDo.id)}
												/>
											)
									})}
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
		modalShow: id => dispatch(modalShow(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (TodoComponent);