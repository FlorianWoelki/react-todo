import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { finishTodo } from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onFinishTodo = this.onFinishTodo.bind(this);
  }

  onFinishTodo() {
    this.props.onFinishTodo(this.props.name);
  }

  render() {
    return (
      <div className="row center valign-wrapper">
        <div className={'col s6 ' + (this.props.done ? 'grey-text' : '')}>
          <h4>
            {this.props.done ? <s>{this.props.name}</s> : this.props.name}
          </h4>
        </div>
        <div className="col s6">
          <button
            className={
              'btn btn-large waves-effect waves-light ' +
              (this.props.done ? 'disabled' : '')
            }
            type="submit"
            name="action"
            onClick={this.onFinishTodo}
          >
            Done
            <i className="material-icons right">flag</i>
          </button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onFinishTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFinishTodo: name => {
      dispatch(finishTodo(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
