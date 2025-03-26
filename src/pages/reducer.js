export const initialTodos = [
  { id: 1, title: 'Todo 1', complete: false, desc: 'bla bla bla' },
  { id: 2, title: 'Todo 2', complete: false, desc: 'bla bla bla' },
  { id: 3, title: 'Todo 3', complete: false, desc: 'bla bla bla' },
];


export const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map(todo => {
        if (todo.id !== action.id) { return todo; }
        return { ...todo, complete: !todo.complete };
      });

    case 'ADD':
      const id = Math.max(...state.map(todo => todo.id), 0) + 1;
      const newTodo = { id, title: action.title + ' ' + id, complete: false, desc: '' };
      return [...state, newTodo];

    case 'DEL':
      return state.filter(todo => todo.id !== action.id);

    case 'UPDATE':
      return state.map(todo => {
        if (todo.id !== action.todo.id) { return todo; }
        return { ...todo,
          title   : action.todo.title,
          desc    : action.todo.desc,
          complete: !!action.todo.complete,          
        };
      });
  

    default: return state;
  }
};

