import React from 'react';
// Child component of ViewTodos
export class TodoItems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <ul className='list-group list-group-flush'>
            {this.props.todos.map(function(todo, i) {
              return (
                <li key={i} className='list-group-item list-group-item-success'>
                  <input className='form-check-input position-static' type='checkbox' value='' />
                  {todo.text} <button className='btn btn-link float-right'>
                  <span className='delete-todo glyphicon glyphicon-trash float-right'></span>
                  </button>
                  <button className='btn btn-link float-right'>
                  <span className='edit-todo glyphicon glyphicon-edit float-right'></span>
                  </button>
                </li>)
              })
            }
          </ul>
        );
    }
}