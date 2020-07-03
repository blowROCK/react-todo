import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoComponent from './components/todo/Todo';
import Modal from './components/modal/Modal';
import {todoSet} from "./actions/todo";

const Storage = window.localStorage;

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getStorage();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.toDos !== prevProps.toDos) {
            this.saveStorage();
        }
    }
    getStorage() {
        const storageList = Storage.getItem("TodoList");
        if(storageList === null) return [];
        this.props.todoSet(JSON.parse(storageList));
    }
    saveStorage() {
        Storage.setItem("TodoList", JSON.stringify(this.props.toDos));
    }
    render(){
        return(
            <div className="App">
                <TodoComponent />
                {this.props.modal.isModalOpen ? <Modal/>: ''}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {toDos : state.toDos, modal: state.modal, calendars: state.calendars}
}
function mapDispatchToProps(dispatch) {
    return {
        todoSet: toDos => dispatch(todoSet(toDos))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
