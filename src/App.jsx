import React, { Component } from 'react';

const TODOs = [
  {text: 'Do grocery shopping', priority: 1, editEnabled: false},
  {text: 'Give a puppy a belly rub', priority: 2, editEnabled: false},
  {text: 'Learn interpretive dance', priority: 3, editEnabled: false}
];
//below is FilterableTodoList (in my notes) but appears here as App. Top level component, holds state
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
      priority: '',
      editEnabled: false
    };
  }

  render() {
    return (

      <div className='container'>
        <div className='page-header'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='lead text-white'>Track all of the things</p>
        </div>
        <form>
          <div className='row'>
            <AddNewTodo />
            <ViewTodos />
          {/* end row div */}
          </div>  
        </form>
      {/* end container div */}
      </div> 
    );
  }
}

class AddNewTodo extends Component {
  render() {

    return(
      <div className='col-md-4'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Add New Todo</div>
          <div className='panel-body'>
            <div className='form-group'>
              <label for='todo-text-label'>I want to...</label>
                <textarea name='todo-text' type='text' rows='3' className='create-todo-text form-control input-md' />
            </div>
            <div className='form-group'>
              <label for='priority'>How much of a priority is this?</label>  
                <select 
                  name='term'  
                  className='create-todo-priority form-control input-md'
                  size='1' 
                  type='number'>
                  <option value='0'>Select a Priority</option>
                  <option value='1'>Low Priority</option>
                  <option value='2'>Medium Priority</option>
                  <option value='3'>High Priority</option>
                </select>
            </div>  
            <div className='panel-footer'>
              <button name='button' className='btn btn-success form-control'>Add</button>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

class ViewTodos extends Component {
  render() {
    return(
      <div className='col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>View Todos</div>
          <div className='panel-body'>
              {/* EmptyListGreeting below */}
            <div className='alert alert-info'>
              <p><strong>No current todos. Perhaps your list is finished!?!</strong></p>
              <p>Add a new todo on the left.</p>
            </div>
              {/* Todo List below */}
            <ul className='list-group list-group-flush'>
              <li className='list-group-item list-group-item-success'>
                <input className='form-check-input position-static' type='checkbox' value='' />
                Success Test <button className='btn btn-link float-right'><span className='delete-todo glyphicon glyphicon-trash float-right'></span></button>
                <button className='btn btn-link float-right'><span className='edit-todo glyphicon glyphicon-edit float-right'></span></button>
              </li>
              <li className='list-group-item list-group-item-warning'>
                <input className='form-check-input position-static' type='checkbox' value='' />
                Warning Test <button className='btn btn-link float-right'><span className='delete-todo glyphicon glyphicon-trash float-right'></span></button>
                <button className='btn btn-link float-right'><span className='edit-todo glyphicon glyphicon-edit float-right'></span></button>
              </li>
              <li className='list-group-item list-group-item-danger'>
                <input className='form-check-input position-static' type='checkbox' value='' />
                Danger Test <button className='btn btn-link float-right'><span className='delete-todo glyphicon glyphicon-trash float-right'></span></button>
                <button className='btn btn-link float-right'><span className='edit-todo glyphicon glyphicon-edit float-right'></span></button>
              </li>        
            </ul>
              {/* End Todo List Section*/}
          </div>
        </div>
          {/* Edit Todo below */}
          <div className='panel panel-default'>
          <div className='panel-body'>
            <div className='form-group'>
              <label for='todo-text-label'>Description</label>
                <textarea name='todo-text' type='text' rows='3' className='update-todo-text form-control input-md' />
            </div>
            <div className='form-group'>
              <label for='priority'>Priority</label>  
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
              <button name='button' className='update-todo btn btn-success float-right'>Save</button>
          </div>
        </div>
        {/* End col-8 div below */}
      </div>
    );
  }
}

export default App;
