import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from '../actions/action';

export default function TodoList () {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.records);
  console.log(todos)
   const handleEdit = (todoId) => {
    const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
    dispatch(setUpdatingTodoIndex(todoIndex));
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  }

  const handleComplete = (event, todoId) => {
    dispatch(completeTodo({ todoId, completed: event.target.checked }));
  }
  let arraytodos=[]
  console.log(arraytodos)
  const set=()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
  }
  set();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title}: {todo.description}
              {arraytodos.push(todo.title,todo.description)}
            
            </span>
            <span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <label>
                complete
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={(event) => handleComplete(event, todo.id)}
                />
              </label>
            </span>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}