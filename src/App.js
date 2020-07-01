import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoComponent from './components/todo/Todo';
import Modal from './components/modal/Modal';

function App({modal}) {
    console.log(modal)
  return (
    <div className="App">
        <TodoComponent />
        {modal.isModalOpen ? <Modal/>: ''}
    </div>
  );
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps) (App);
