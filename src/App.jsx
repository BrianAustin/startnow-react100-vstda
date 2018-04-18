import React, { Component } from 'react';
import { AddNewTodo } from './AddNewTodo';
import { ViewTodos } from './ViewTodos';
import { TodoItems } from './TodoItems';
import { EmptyListGreeting } from './EmptyListGreeting';

// Top level component, holds state
class App extends Component {
  constructor(props) {
    super(props);
    const todos = [
      {text: 'Do grocery shopping', priority: 1, editEnabled: false, id: 1524003462111},
      {text: 'Give a puppy a belly rub', priority: 2, editEnabled: false, id: 1524003485690},
      {text: 'Learn interpretive dance', priority: 3, editEnabled: false, id: 1524003512947}
    ];
    
    this.state = {
      todos,
    };
    this.createTodo = this.createTodo.bind(this);
  }
  
  createTodo(todo) {
    let todos = [...this.state.todos];

    todos.push(todo);
    this.setState({ todos });
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='lead text-white'>Track all of the things</p>
        </div>
          <div className='row'>
            <AddNewTodo createTodo={this.createTodo} />
            <ViewTodos todos={this.state.todos}  />
          {/* end row div */}
          </div>  
      {/* end container div */}
      </div> 
    );
  }
}

export default App;
