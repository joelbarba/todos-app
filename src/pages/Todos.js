import { useReducer, useState } from 'react';
import { initialTodos, reducer } from './reducer';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [selTodo, setSelTodo] = useState(null);


  const addNew = () => {
    const action = { type: 'ADD', title: 'New' };
    dispatch(action);
    const nextState = reducer(todos, action);
    setSelTodo(nextState.at(-1));
    // console.log(todos, nextState);
  };

  const toggleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DEL', id });
  };

  const updateTodo = (todo) => {
    dispatch({ type: 'UPDATE', todo });
  }

  return (
    <div className="todos">
      <h1>Todos</h1>
      <p>Here's the list of todos</p>
      <button onClick={ addNew }>Add New Task</button>
      <ul>
        { todos.map(todo => (
          <li key={todo.id}>
            <button onClick={ () => deleteTodo(todo.id) }>Delete</button>
            <label>
              <input type="checkbox" checked={ todo.complete } onChange={() => toggleComplete(todo) }/>
              <span>{todo.title}</span>
            </label>
            <button className="edit-btn" onClick={ () => setSelTodo(todo) }>Edit</button>
          </li>
      ))}
      </ul>
      {selTodo && <TodoForm todo={selTodo} updateTodo={updateTodo}/>}
    </div>
  );
}

// export default Todos;



