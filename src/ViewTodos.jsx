import React from 'react';
import { TodoItems } from './TodoItems';
import { EmptyListGreeting } from './EmptyListGreeting';
//child of App 
export class ViewTodos extends React.Component {
  constructor (props) {
    super(props);
  }
    // priorityColor() {
    //   const priorityNum = this.props.todos.priority;
    //   switch (priorityNum) {
    //     case 1:
    //       return 'list-group-item list-group-item-success';
    //     case 2:
    //       return 'list-group-item list-group-item-warning';
    //     case 3:
    //       return 'list-group-item list-group-item-danger';    
    //   }
    // };

  //   emptyTodosOrNot() {
  //     if(todos.length === 0) {
  //         return <EmptyListGreeting />
  //     } else {
  //         return <TodoItems todos={this.props.todos} />
  //     }
  // }

  render() {
    return(
      <div className='col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>View Todos</div>
          <div className='panel-body'>
              {/* EmptyListGreeting or Todo List below */}
              
              <EmptyListGreeting />
              <TodoItems todos={this.props.todos} />

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