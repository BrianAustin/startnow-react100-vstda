import React from 'react';
// Child component of ViewTodos
export class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.priorityColor = this.priorityColor.bind(this);
  }

  priorityColor(priorityNum) {
    switch (priorityNum) {
      case 1:
        return 'list-group-item list-group-item-success';
      case 2:
        return 'list-group-item list-group-item-warning';
      case 3:
        return 'list-group-item list-group-item-danger';    
    }
  };

  render() {
      return (
        <ul className='list-group list-group-flush'>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i} className={this.priorityColor(todo.priority)}>
                <input 
                  className='form-check-input position-static' 
                  type='checkbox' 
                  value='' />
                    {todo.text} 
                <button className='btn btn-link float-right'>
                <span className='delete-todo glyphicon glyphicon-trash float-right'></span>
                </button>
                <button 
                  className='btn btn-link float-right'>
                <span className='edit-todo glyphicon glyphicon-edit float-right'></span>
                </button>
              </li>)
            })
          }
        </ul>
      );
  }
}