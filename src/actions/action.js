import {
    SET_TODO,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_UPDATING_TODO_INDEX,
  } from '../actions/actiontype';
 

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const completeTodo = (payload) => ({ type: COMPLETE_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const setTodo = (payload) => ({ type: SET_TODO, payload });
export const setUpdatingTodoIndex = (payload) => ({ type: SET_UPDATING_TODO_INDEX, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });