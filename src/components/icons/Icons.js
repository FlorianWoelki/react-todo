import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';
import './Icons.css';

class Icons extends Component {
  constructor(props) {
    super(props);

    this.onAddTodo = this.onAddTodo.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  UNSAFE_componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  componentDidMount() {
    // NOTICE: jQuery is not working in this case..
    const elements = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elements);
  }

  onClear() {
    this.props.clearTodos();
  }

  onAddTodo() {
    $('body').fadeOut('slow', () => {
      this.props.history.push('addTodo');
    });
  }

  render() {
    return (
      <div className="icons">
        <button
          className="btn-floating btn-large waves-effect waves-light right grey tooltipped"
          onClick={this.onClear}
          data-position="top"
          data-tooltip="Clear all finished Todos"
        >
          <i className="material-icons">clear</i>
        </button>
        <button
          className="btn-floating btn-large waves-effect waves-light right red tooltipped"
          onClick={this.onAddTodo}
          data-position="top"
          data-tooltip="Add a new Todo"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    );
  }
}

Icons.propTypes = {
  history: PropTypes.object,
  clearTodos: PropTypes.func.isRequired
};

export default withRouter(Icons);
