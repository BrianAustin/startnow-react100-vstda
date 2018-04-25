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

  completedCheckbox

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
                    <span 
                      className='btn btn-link float-right delete-todo'
                      onClick={e => {this.props.handleDeleteClick(todo.id)}}>
                    <span className='glyphicon glyphicon-trash float-right delete-todo'></span>
                    </span>
                    <span 
                      className='btn btn-link float-right edit-todo'
                      onClick={e => {this.props.handleEditClick(todo.id)}}>
                    <span 
                      className='glyphicon glyphicon-edit float-right edit-todo'></span>
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
                          className='form-control input-md update-todo-text'
                          onChange={this.props.updateEditingTodoText}
                        ></textarea>
                    </div>
                    <div className='form-group'>
                      <label name='priority'>Priority</label>  
                        <select 
                          name='term'  
                          className='form-control input-md update-todo-priority'
                          size='1' 
                          type='number'
                          onChange={this.props.updateEditingPriority}>
                          <option value='0'>Select a Priority</option>
                          <option value='1'>Low Priority</option>
                          <option value='2'>Medium Priority</option>
                          <option value='3'>High Priority</option>
                        </select>
                    </div>  
                      <button 
                        name='button' 
                        className='btn btn-success float-right update-todo'
                        onClick={this.props.handleEditingSaveClick}
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
