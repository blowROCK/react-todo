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
		console.log("props : ",this.props);
		this.onAddBtn = this.onAddBtn.bind(this);
	}
	onAddBtn(e){
		e.preventDefault()
		this.props.modalShow(generatorID());
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
										if (!toDo.isDone)
											return <TodoItem key={toDo.id} {...toDo} />
									})}
								</ul>
							</div>
							<div id="done" className="todo__container__contents__todoList">
								<div className="todoList__title done">Done</div>
								<ul id="doneUl">
									{this.props.toDos.map((toDo)=>{
										if (toDo.isDone)
											return <TodoItem key={toDo.id} {...toDo} />
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
		modalShow: (id) => dispatch(modalShow(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (TodoComponent);