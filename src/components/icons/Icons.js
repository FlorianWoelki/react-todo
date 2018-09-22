import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import './icons.css';

class Icons extends Component {
  constructor(props) {
    super(props);

    this.onAddTodo = this.onAddTodo.bind(this);
  }

  UNSAFE_componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  onAddTodo() {
    $('body').fadeOut('slow', () => {
      this.props.history.push('addTodo');
    });
  }

  render() {
    return (
      <div className="icons">
        <button className="btn-floating btn-large waves-effect waves-light right grey">
          <i className="material-icons">clear</i>
        </button>
        <button
          className="btn-floating btn-large waves-effect waves-light right red"
          onClick={this.onAddTodo}
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    );
  }
}

Icons.propTypes = {
  history: PropTypes.object
};

export default withRouter(Icons);
