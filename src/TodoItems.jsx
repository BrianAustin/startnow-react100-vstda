import React from 'react';
// Child component of ViewTodos
export class TodoItems extends React.Component {
  constructor(props) {
    super(props);
  }

  priorityColorAndIsCompleted(priorityNum, completeOrNot) {
    if(priorityNum == '1' && completeOrNot == false) {
      return 'list-group-item list-group-item-success';
    } else if (priorityNum == '1' && completeOrNot === true) {
      return 'list-group-item list-group-item-success strike-through';
    } else if (priorityNum == '2' && completeOrNot === false) {
      return 'list-group-item list-group-item-warning';
    } else if (priorityNum == '2' && completeOrNot === true) {
      return 'list-group-item list-group-item-warning strike-through';
    } else if (priorityNum == '3' && completeOrNot === false) {
      return 'list-group-item list-group-item-danger';
    } else if (priorityNum == '3' && completeOrNot === true) {
      return 'list-group-item list-group-item-danger strike-through';
    } else if (priorityNum == '1') {
      return 'list-group-item list-group-item-success';
    } else if (priorityNum == '2') {
      return 'list-group-item list-group-item-warning';
    } else if (priorityNum == '3') {
      return 'list-group-item list-group-item-danger';
    }
  };

  render() {
    return (
        <ul className='list-group list-group-flush'>
          {this.props.todos.map((todo, i) => {
            if(todo.editEnabled == false) {
              return (
                <li key={i} className={this.priorityColorAndIsCompleted(todo.priority, todo.isCompleted)}>
                  <input 
                    className='form-check-input position-static' 
                    type='checkbox' 
                    value=''
                    onClick={e => {this.props.handleFormCheckboxInput(todo.id)}} />
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
                <li key={i} className={this.priorityColorAndIsCompleted(todo.priority)}>
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
