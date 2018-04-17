import React from 'react';
//child of App
export class AddNewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: 0
    }
    this.updateCreateTodoText = this.updateCreateTodoText.bind(this);
    this.updateTodoPriority = this.updateTodoPriority.bind(this);
  }

  handleCreate(e) {
    e.preventDefault();

    console.log(this.state.text);
    console.log(this.state.priority);
    let todo = {
      text: this.state.text,
      priority: this.state.priority
    }
    this.props.createTodo(todo);  
    this.setState({ 
      text: '',
      priority: 0
     })
  }

  updateCreateTodoText(e) {
    this.setState({
      text: e.target.value
    });
  }

  updateTodoPriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  render() {

    return(
      <form className='col-md-4' onSubmit={this.handleCreate.bind(this)}>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New Todo</div>
          <div className='panel-body'>
            <div className='form-group'>
              <label for='todo-text-label'>I want to...</label>
                <textarea 
                  name='todo-text' 
                  type='text' rows='3' 
                  className='create-todo-text form-control input-md'
                  value={this.state.text} 
                  onChange={this.updateCreateTodoText} />
            </div>
            <div className='form-group'>
              <label for='priority'>How much of a priority is this?</label>  
                <select 
                  name='term'  
                  className='create-todo-priority form-control input-md'
                  size='1' 
                  type='number'
                  value={this.state.priority}
                  onChange={this.updateTodoPriority}>
                    <option value='0'>Select a Priority</option>
                    <option value='1'>Low Priority</option>
                    <option value='2'>Medium Priority</option>
                    <option value='3'>High Priority</option>
                </select>
            </div>  
            <div className='panel-footer'>
              <button 
                name='button' 
                className='btn btn-success form-control'>Add</button>
            </div>  
          </div>
        </div>
      </form>
    );
  }
}