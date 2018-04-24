import React from 'react';
// Child component of ViewTodos
export class TodoItems extends React.Component {
  constructor(props) {
    super(props);
  }

  priorityColor(priorityNum) {
    switch (priorityNum) {
      case '1':
        return 'list-group-item list-group-item-success';
      case '2':
        return 'list-group-item list-group-item-warning';
      case '3':
        return 'list-group-item list-group-item-danger';    
    }
  };

  render() {
      return (
          <ul className='list-group list-group-flush'>
            {this.props.todos.map((todo, i) => {
              if(todo.editEnabled == false) {
                return (
                  <li key={i} className={this.priorityColor(todo.priority)}>
                    <input 
                      className='form-check-input position-static' 
                      type='checkbox' 
                      value='' />
                        {todo.text} 
                    <span className='btn btn-link float-right'>
                    <span className='delete-todo glyphicon glyphicon-trash float-right'></span>
                    </span>
                    <span 
                      className='btn btn-link float-right edit-todo'
                      onClick={e => {this.props.handleEditClick(todo.id)}}>
                    <span className='edit-todo glyphicon glyphicon-edit float-right'></span>
                    </span>
                  </li>)
              } else {
                return (
                  <li key={i} className={this.priorityColor(todo.priority)}>
                    <div className='form-group'>
                      <label name='todo-text-label'>Description</label>
                        <textarea 
                          name='todo-text' 
                          type='text' 
                          rows='3'
                          defaultValue={todo.text} 
                          className='update-todo-text form-control input-md'
                        ></textarea>
                    </div>
                    <div className='form-group'>
                      <label name='priority'>Priority</label>  
                        <select 
                          name='term'  
                          className='update-todo-priority form-control input-md'
                          size='1' 
                          type='number'>
                          <option value='0'>Select a Priority</option>
                          <option value='1'>Low Priority</option>
                          <option value='2'>Medium Priority</option>
                          <option value='3'>High Priority</option>
                        </select>
                    </div>  
                      <button 
                        name='button' 
                        className='update-todo btn btn-success float-right'
                      >Save</button>
                  </li>  
                )
              }
            })
          }
        </ul>
      );
  }
}
