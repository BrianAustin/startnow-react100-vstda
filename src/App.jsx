import React, { Component } from 'react';

class App extends Component {



  render() {
    return (

      <div className='container'>

        <div className='page-header'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='lead text-white'>Track all of the things (and be cute everyday, yo!)</p>
        </div>
        <form>
          <div className='row'>
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
                        className='create-to-do-priority form-control input-md'
                        size='1' 
                        type='number'>
                        <option value='0'>Select a Priority</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </select>
                  </div>  
                  <div className='panel-footer'>
                    <button name='button' className='btn btn-success form-control'>Add</button>
                  </div>  
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='panel panel-default'>
                <div className='panel-heading'>View Todos</div>
                <div className='panel-body'>
                  <div className='alert alert-info'>
                  </div>
                </div>
              </div>  
            </div>
          {/* end row div */}
          </div>  
        </form>
      {/* end container div */}
      </div> 
    );
  }
}

export default App;
