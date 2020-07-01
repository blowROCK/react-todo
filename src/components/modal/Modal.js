import React, { Component } from "react";
import './Modal.css';
import { connect } from 'react-redux';
import { modalHide } from "../../actions/modal";
import {todoAdd, todoDelete} from '../../actions/todo';

// import PropTypes from 'prop-types';

class Modal extends Component{
	constructor(props) {
		super(props);
		this.state = {
			textValue: '',
			tooltip: ''
		}
		this.closeModal = this.closeModal.bind(this);
		console.log("여긴 모달 : ", this.props)
	}
	closeModal(){
		this.props.modalHide();
	}
	onChange(e){
		const val = e.target.value;
		if(isInvalidChar(val)){
			this.setState({tooltip: '!@#$%^&*()_+=,.? 를 제외한 특수 문자는 금지 입니다.'})
		}else if(val.length >= 120){
			this.setState({tooltip: '최대 글자수 120자를 넘길 수 없 습니다.'})
		}else{
			this.setState({
				tooltip: '',
				textValue: val
			})
		}
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state.textValue,"**")
		this.props.todoAdd(this.props.modal.id, this.state.textValue)
		this.props.modalHide();
	}
	onDelete(e){
		e.preventDefault();
		this.props.todoDelete(this.props.modal.id)
		this.props.modalHide();
	}
	render() {
		// const { text, onClose } = this.props;
		return (
			<div className="modal" id="modal">
				<div className="modal__content">
					<div className="modal__content__textBox">
						<textarea
							id="textarea"
							className="modal__content__textBox__textarea"
							placeholder="내용을 입력 하세요." maxLength="120"
							onChange={this.onChange.bind(this)}
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
		todoAdd: (id,text) => dispatch(todoAdd(id, text)),
		todoDelete: (id) => dispatch(todoDelete(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Modal);
