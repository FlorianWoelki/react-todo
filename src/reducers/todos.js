const initState = [
  {
    name: 'Make dinner',
    done: false
  },
  {
    name: 'Meet friends',
    done: true
  },
  {
    name: 'Meet with family',
    done: false
  }
];

const todos = (state = initState, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        name: action.name,
        done: false
      }
    ];
  case 'FINISH_TODO':
    return state.map(
      todo => (todo.id === action.id ? { ...todo, done: true } : todo)
    );
  default:
    return state;
  }
};

export default todos;
