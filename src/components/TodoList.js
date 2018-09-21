import React from 'react';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return (
    <div className="container">
      {todoList
        .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1))
        .map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      <Icons />
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      done: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
