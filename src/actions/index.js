export const addTodo = name => ({
  type: 'ADD_TODO',
  name
});

export const finishTodo = id => ({
  type: 'FINISH_TODO',
  id
});
