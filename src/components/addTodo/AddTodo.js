import React, { Component } from 'react';
import $ from 'jquery';
import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  onGoBack = () => {
    $('body').fadeOut('slow', () => {
      this.props.history.push('/');
    });
  };

  onAddTodo = () => {
    $('body').fadeOut('slow', () => {
      this.props.history.push('/');

      if (this.state.inputValue) {
        // TODO: Add todo via redux
        console.log(this.state.inputValue);
      }
    });
  };

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
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
            onChange={event => this.updateInputValue(event)}
            value={this.state.inputValue}
          />
        </div>
        <a
          className="btn btn-large waves-effect waves-light grey right"
          onClick={this.onGoBack}
        >
          Go Back
        </a>
        <a
          className="btn btn-large waves-effect waves-light red right"
          onClick={this.onAddTodo}
        >
          <i className="material-icons left">add</i>
          Add
        </a>
      </div>
    );
  }
}

export default AddTodo;
