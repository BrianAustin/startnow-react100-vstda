import React from 'react';
import { TodoItems } from './TodoItems';
import { EmptyListGreeting } from './EmptyListGreeting';
//child of App 
export class ViewTodos extends React.Component {
  constructor (props) {
    super(props);
  }
  //NOTE: for below, try using arrow function when inserting below so you don't screw up the 'this'
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

          </div>
        </div>
      </div>        
    );
  }
}