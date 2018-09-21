import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ name, done }) => {
  return (
    <div className="row center valign-wrapper">
      <div className={'col s6 ' + (done ? 'grey-text' : '')}>
        <h4>{done ? <s>{name}</s> : name}</h4>
      </div>
      <div className="col s6">
        <button
          className={
            'btn btn-large waves-effect waves-light ' + (done ? 'disabled' : '')
          }
          type="submit"
          name="action"
        >
          Done
          <i className="material-icons right">flag</i>
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};

export default Todo;
