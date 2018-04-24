import React from 'react';
//child of App
export class AddNewTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className='col-md-4' onSubmit={this.props.handleCreate}>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New Todo</div>
          <div className='panel-body'>
            <div className='form-group'>
              <label name='todo-text-label'>I want to...</label>
                <textarea 
                  name='todo-text' 
                  type='text' rows='3' 
                  className='create-todo-text form-control input-md'
                  value={this.props.text} 
                  onChange={this.props.updateCreateTodoText} />
            </div>
            <div className='form-group'>
              <label name='priority'>How much of a priority is this?</label>  
                <select 
                  name='term'  
                  className='create-todo-priority form-control input-md'
                  size='1' 
                  type='number'
                  value={this.props.priority}
                  onChange={this.props.updateTodoPriority}>
                    <option value='0'>Select a Priority</option>
                    <option value='1'>Low Priority</option>
                    <option value='2'>Medium Priority</option>
                    <option value='3'>High Priority</option>
                </select>
            </div>  
            <div className='panel-footer'>
              <button 
                name='button' 
                className='create-todo btn btn-success form-control'>Add</button>
            </div>  
          </div>
        </div>
      </form>
    );
  }
}