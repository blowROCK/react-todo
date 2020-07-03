import React, { Component } from "react";
import './Modal.css';
import { connect } from 'react-redux';
import { modalHide } from "../../actions/modal";
import {todoAdd, todoDelete, todoModify} from '../../actions/todo';

class Modal extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isModify: (this.props.modal.text !== undefined),
			textValue: this.props.modal.text,
			tooltip: '',
			isSubmitOk: true
		}
		this.closeModal = this.closeModal.bind(this);
	}
	closeModal(){
		this.props.modalHide();
	}
	onChange(e){
		const val = e.target.value;
		if(isInvalidChar(val)){
			this.setState({tooltip: '!@#$%^&*()_+=,.? 를 제외한 특수 문자는 금지 입니다.', textValue: val, isSubmitOk: false})
		}else if(val.length >= 120){
			this.setState({tooltip: '최대 글자수 120자를 넘길 수 없 습니다.', textValue: val, isSubmitOk: false})
		}else{
			this.setState({
				tooltip: '',
				textValue: val,
				isSubmitOk: true
			})
		}
	}
	onSubmit(e){
		e.preventDefault();
		if(!this.state.isSubmitOk) return;
		if(this.state.isModify)
			this.props.todoModify(this.props.modal.id, this.state.textValue)
		else
			this.props.todoAdd(this.props.modal.id, this.state.textValue, this.props.calendars.SelectedDate)
		this.props.modalHide();
	}
	onDelete(e){
		e.preventDefault();
		this.props.todoDelete(this.props.modal.id)
		this.props.modalHide();
	}
	render() {
		return (
			<div className="modal" id="modal">
				<div className="modal__content">
					<div className="modal__content__textBox">
						<textarea
							id="textarea"
							className="modal__content__textBox__textarea"
							placeholder="내용을 입력 하세요." maxLength="120"
							onChange={this.onChange.bind(this)}
							value={this.state.textValue}
						/>
						<div id="tooltip" className="modal__content__textBox_tooltip">
							{this.state.tooltip}
						</div>
					</div>
					<div className="modal__content__btnBox">
						<div id="delete" onClick={this.onDelete.bind(this)} className="modal__content__textBox__delete">Delete</div>
						<div id="submit" onClick={this.onSubmit.bind(this)} className="modal__content__textBox__submit">Submit</div>
					</div>
				</div>
				<div className="modal__back" onClick={this.closeModal}/>
			</div>
		);
	}
}

const isInvalidChar = function (str) {
	const rex1 = /[^a-z|A-Z|가-힣|ㄱ-ㅎㅏ-ㅣ0-9|!@#$%^&*()_+=,.?|\n\s\r]/g;
	return rex1.test(str);
}
function mapStateToProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return{
		modalHide: () => dispatch(modalHide()),
		todoAdd: (id,text, date) => dispatch(todoAdd(id, text, date)),
		todoModify: (id, text) => dispatch(todoModify(id, text)),
		todoDelete: (id) => dispatch(todoDelete(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Modal);
