import React from 'react';
//child of App
export class AddNewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: 0,
      editEnabled: false,
      id: 0
    }
    this.updateCreateTodoText = this.updateCreateTodoText.bind(this);
    this.updateTodoPriority = this.updateTodoPriority.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(e) {
    e.preventDefault();
    let idStamp = new Date().valueOf();

    // console.log(this.state.text);
    // console.log(this.state.priority);
    // console.log(this.state.editEnabled);
    // console.log(idStamp);

    if(this.state.text == '' || this.state.priority === 0) {
      return alert('Please write some text and/or pick a priority')
    } else {
      let todo = {
        text: this.state.text,
        priority: this.state.priority,
        editEnabled: this.state.editEnabled,
        id: idStamp
      }
      this.props.createTodo(todo);  
      //below line resets text and priority fields to default after user submital
      this.setState({ 
        text: '',
        priority: 0,
        id: 0
      })
    }  
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
      <form className='col-md-4' onSubmit={this.handleCreate}>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New Todo</div>
          <div className='panel-body'>
            <div className='form-group'>
              <label name='todo-text-label'>I want to...</label>
                <textarea 
                  name='todo-text' 
                  type='text' rows='3' 
                  className='create-todo-text form-control input-md'
                  value={this.state.text} 
                  onChange={this.updateCreateTodoText} />
            </div>
            <div className='form-group'>
              <label name='priority'>How much of a priority is this?</label>  
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