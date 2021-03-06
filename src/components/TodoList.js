import React from 'react';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';
import Todo from './Todo';

import { clearTodos } from '../actions';

import { connect } from 'react-redux';

const TodoList = ({ todos, onClearTodos }) => {
  function clearTodos() {
    onClearTodos();
  }

  return (
    <div className="container">
      {todos
        .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1))
        .map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      <Icons clearTodos={clearTodos} />
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onClearTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    clearTodos: clearTodos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearTodos: () => {
      dispatch(clearTodos);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
