import { combineReducers } from 'redux';
import calendar from './calendar'
import toDos from './todo'
import modal from './modal'

export const todoApp = combineReducers({
	calendar, toDos, modal
});