import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTodo,addTodo,updateTodo } from '../actions/action';

function TodoForm (props) {
  const { todo, updatingTodoIndex } = props.todos;
  console.log(todo)
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
      
    } else {
      props.updateTodo({ ...todo });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input name="title" value={todo.title} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" value={todo.description} onChange={handleChangeInput} />
          </label>
        </div>
        <div>
           <button type="submit" >{updatingTodoIndex ? 'Update' : 'Submit'}</button><Link to="/showall"><button >show all</button></Link>
        </div>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);