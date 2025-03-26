import { useState, useEffect } from 'react';
import './TodoForm.scss';

function TodoForm({ todo, updateTodo }) {
  const [inputs, setInputs] = useState({ ...todo });  

  // Update inputs when a different todo is selected (from the parent)
  useEffect(() => { 
    console.log('load todo', todo.id, 'in the form');
    setInputs({ ...todo });
  }, [todo]);

  // Update the value in the local inputs{} state when editing the form
  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [field]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Your form values:`, inputs);
    updateTodo({ ...todo, ...inputs });
  }


  return (<form className="todo-form" onSubmit={handleSubmit}>
    <h2 style={{textAlign: 'center'}}>ID: {todo.id}</h2>
    <label><span>Title:</span> <input type="text" name="title" value={inputs.title} onChange={handleChange}/> </label>
    <label><span>Desc: </span> <textarea name="desc" value={inputs.desc} onChange={handleChange}/> </label>

    <label><span>Completed:</span>
      <select name="completed" value={inputs.completed} onChange={handleChange}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </label>

    <div>
      <button>Delete</button>
      <input type="submit" value="Save"/>
    </div>

  </form>);
}

export default TodoForm;