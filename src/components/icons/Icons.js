import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import './Icons.css';

class Icons extends Component {
  componentWillMount = () => {
    $('body').css('display', 'none');
    $('body').fadeIn('slow');
  };

  onAddTodo = () => {
    $('body').fadeOut('slow', () => {
      this.props.history.push('addTodo');
    });
  };

  render() {
    return (
      <div className="icons">
        <a className="btn-floating btn-large waves-effect waves-light right grey">
          <i className="material-icons">clear</i>
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light right red"
          onClick={this.onAddTodo}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default withRouter(Icons);
