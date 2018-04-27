import React from 'react';
import { TodoItems } from './TodoItems';
import { EmptyListGreeting } from './EmptyListGreeting';
//child of App 
export class ViewTodos extends React.Component {
  constructor (props) {
    super(props);
  }
  emptyTodosOrNot(todosLength) {
    if(todosLength == 0) {
        return <EmptyListGreeting />
    } else {
        return <TodoItems todos={this.props.todos}
                          handleEditClick={this.props.handleEditClick}
                          handleDeleteClick={this.props.handleDeleteClick}
                          updateEditingTodoText={this.props.updateEditingTodoText}
                          updateEditingPriority={this.props.updateEditingPriority}
                          handleEditingSaveClick={this.props.handleEditingSaveClick}
                          handleDeleteClick={this.props.handleDeleteClick}
                          handleFormCheckboxInput={this.props.handleFormCheckboxInput} />
    }
  }
  
  render() {
    return(
      <div className='col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>View Todos</div>
          <div className='panel-body'>
            {/* below is function to determine if we show EmptyListGreeting or Todo List */}
            {this.emptyTodosOrNot(this.props.todos.length)}

          </div>
        </div>
      </div>        
    );
  }
}