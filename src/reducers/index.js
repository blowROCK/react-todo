import { combineReducers } from 'redux';
import calendars from './calendars'
import toDos from './todo'
import modal from './modal'

export const todoApp = combineReducers({
	calendars, toDos, modal
});