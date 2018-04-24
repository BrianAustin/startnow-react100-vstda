import React, { Component } from 'react';
import { AddNewTodo } from './AddNewTodo';
import { ViewTodos } from './ViewTodos';
import { EmptyListGreeting } from './EmptyListGreeting';

// Top level component, holds state
class App extends Component {
  constructor(props) {
    super(props);
    const todos = [
      {text: 'Do grocery shopping', priority: '1', editEnabled: false, id: 1524003462111, isCompleted: false},
      {text: 'Give a puppy a belly rub', priority: '2', editEnabled: false, id: 1524003485690, isCompleted: false},
      {text: 'Learn interpretive dance', priority: '3', editEnabled: false, id: 1524003512947, isCompleted: false}
    ];
    
    this.state = {
      todos,
      text: '',
      priority: 0,
      editEnabled: false,
      id: 0,
      isCompleted: false
    };
    this.createTodo = this.createTodo.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    //this.handleDelete = this.handleDeleteClick.bind(this);
    this.updateCreateTodoText = this.updateCreateTodoText.bind(this);
    this.updateTodoPriority = this.updateTodoPriority.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(e) {
    e.preventDefault();
    let idStamp = new Date().valueOf();

    if(this.state.text == '' || this.state.priority == '0') {
      return alert('Please write some text and/or pick a priority')
    } else {
      let todo = {
        text: this.state.text,
        priority: this.state.priority,
        editEnabled: false,
        id: idStamp,
        isCompleted: false
      }
      this.createTodo(todo);  
      //below line resets text and priority fields to default after user submital
      this.setState({ 
        text: '',
        priority: 0,
        id: 0
      })
    }  
  }

  createTodo(todo) {
    let todos = [...this.state.todos];

    todos.push(todo);
    this.setState({ todos });
  }

  handleEditClick(id) {
    for(var i in this.state.todos) {
      if(this.state.todos[i].id == id) {
        var editTodo = this.state.todos[i]
        this.editIndexNum = i;
      }
    }
    let todo = {
      text: editTodo.text,
      priority: editTodo.priority,
      editEnabled: true,
      id: editTodo.id,
      isCompleted: editTodo.isCompleted
    }
    this.updateTodo(todo);
  }

  updateTodo(todo) {
    let todos = [...this.state.todos];

    todos.splice(this.editIndexNum, 1, todo);
    this.setState({ todos });
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

  //below method for delete button on ViewTodos
  handleDeleteClick(todoId) {

  }

  render() {
    //console.log(this.state.id);
    //console.log(todoBeingEdited);
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='text-white'>Very Simple Todo App</h1>
          <p className='lead text-white'>Track all of the things</p>
        </div>
          <div className='row'>
            <AddNewTodo 
              todos={this.state.todos}
              text={this.state.text}
              priority={this.state.priority}
              handleCreate={this.handleCreate}
              updateCreateTodoText={this.updateCreateTodoText}
              updateTodoPriority={this.updateTodoPriority} />
            <ViewTodos 
              todos={this.state.todos}
              handleEditClick={this.handleEditClick}
              handleDeleteClick={this.handleDeleteClick} />
          {/* end row div */}
          </div>  
      {/* end container div */}
      </div> 
    );
  }
}

export default App;
