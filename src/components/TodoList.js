import React from 'react';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';
import Todo from './Todo';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <div className="container">
      {todos
        .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1))
        .map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      <Icons />
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
