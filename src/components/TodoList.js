import React, { Component } from 'react';
import Icons from './icons/Icons';

class TodoList extends Component {
  render() {
    let todoList = this.props.todoList.sort((a, b) => a.done - b.done);

    todoList = todoList.map(todo => {
      return (
        <div className="row center valign-wrapper" key={todo.id}>
          <div className={'col s6 ' + (todo.done ? 'grey-text' : '')}>
            <h4>{todo.done ? <s>{todo.name}</s> : todo.name}</h4>
          </div>
          <div className="col s6">
            <button
              className={
                'btn btn-large waves-effect waves-light ' +
                (todo.done ? 'disabled' : '')
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
    });

    return (
      <div className="container">
        {todoList}
        <Icons />
      </div>
    );
  }
}

export default TodoList;
