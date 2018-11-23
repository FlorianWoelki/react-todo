export const addTodo = name => ({
  type: 'ADD_TODO',
  name
});

export const finishTodo = name => ({
  type: 'FINISH_TODO',
  name
});
