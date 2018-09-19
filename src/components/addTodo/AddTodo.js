import React, { Component } from 'react';
import $ from 'jquery';
import './AddTodo.css';

class AddTodo extends Component {
  componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  onGoBack = () => {
    $('body').fadeOut('slow', () => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="addTodo container">
        <div className="input-field">
          <i className="material-icons prefix">add</i>
          <textarea
            id="add-todo"
            className="materialize-textarea"
            placeholder="Todo Name"
          />
        </div>
        <a
          className="btn btn-large waves-effect waves-light grey right"
          onClick={this.onGoBack}
        >
          Go Back
        </a>
        <a className="btn btn-large waves-effect waves-light red right">
          <i className="material-icons left">add</i>
          Add
        </a>
      </div>
    );
  }
}

export default AddTodo;
