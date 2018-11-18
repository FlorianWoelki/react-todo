import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './AddTodo.css';

import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.onGoBack = this.onGoBack.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  UNSAFE_componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  onGoBack() {
    $('body').fadeOut('slow', () => {
      this.props.history.push('/');
    });
  }

  onAddTodo() {
    $('body').fadeOut('slow', () => {
      this.props.history.push('/');

      if (this.state.inputValue) {
        this.props.onAddTodo(this.state.inputValue);
      }
    });
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className="add-todo container">
        <div className="input-field">
          <i className="material-icons prefix">add</i>
          <textarea
            id="add-todo"
            className="materialize-textarea"
            onChange={event => this.updateInputValue(event)}
            value={this.state.inputValue}
          />
          <label htmlFor="add-todo">Todo Name</label>
        </div>
        <button
          className="btn btn-large waves-effect waves-light grey right"
          onClick={this.onGoBack}
        >
          Go Back
        </button>
        <button
          className="btn btn-large waves-effect waves-light red right"
          onClick={this.onAddTodo}
        >
          <i className="material-icons left">add</i>
          Add
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  history: PropTypes.object,
  onAddTodo: PropTypes.func.isRequired
};

// Map the state(data) from the store to props of this component.
// Logging out the props would give us the todos array.
// Save props using locally. 
const mapStateToProps = state => {
  return {
    state
  };
};

// Mapping dispatch to props. Saving the 'onAddTodo' function to the props
// that executes the dispatch(addTodo) method in our action.
// Save methods to props, actions that I want to execute.
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: name => {
      dispatch(addTodo(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
