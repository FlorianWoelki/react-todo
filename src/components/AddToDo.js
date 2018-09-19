import React, { Component } from 'react';

class AddToDo extends Component {
  render() {
    return (
      <div className="addToDo">
        <div className="input-field col s6">
          <i className="material-icons prefix">add</i>
          <textarea id="add-todo" className="materialize-textarea" />
          <label for="add-todo">ToDo Name</label>
        </div>
      </div>
    );
  }
}

export default AddToDo;
