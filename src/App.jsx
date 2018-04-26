import React, { Component } from 'react';
import { AddNewTodo } from './AddNewTodo';
import { ViewTodos } from './ViewTodos';
import { EmptyListGreeting } from './EmptyListGreeting';

// Top level component, holds state
class App extends Component {
  constructor(props) {
    super(props);
    const todos = [
      {text: 'Do grocery shopping', priority: '1', editEnabled: false, id: 1524003462111, isCompleted: false, addingText: '', addingPriority: '0'},
      {text: 'Give a puppy a belly rub', priority: '2', editEnabled: false, id: 1524003485690, isCompleted: false, addingText: '', addingText: '0'},
      {text: 'Learn interpretive dance', priority: '3', editEnabled: false, id: 1524003512947, isCompleted: false, addingText: '', addingText: '0'}
    ];
    
    this.state = {
      todos,
      text: '',
      priority: 0,
      editEnabled: false,
      id: 0,
      isCompleted: false,
      addingText: '',
      addingPriority: 0
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditingSaveClick = this.handleEditingSaveClick.bind(this);
    this.updateEditingTodoText = this.updateEditingTodoText.bind(this);
    this.updateEditingPriority = this.updateEditingPriority.bind(this);
    this.updateCreateTodoText = this.updateCreateTodoText.bind(this);
    this.updateTodoPriority = this.updateTodoPriority.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleFormCheckboxInput = this.handleFormCheckboxInput.bind(this);
  }

  handleCreate(e) {
    e.preventDefault();
    let idStamp = new Date().valueOf();

    if(this.state.addingText == '' || this.state.addingPriority == '0') {
      return alert('Please write some text and/or pick a priority')
    } else {
      let todo = {
        text: this.state.addingText,
        priority: this.state.addingPriority,
        editEnabled: false,
        id: idStamp,
        isCompleted: false,
        addingText: '',
        addingPriority: ''
      }
      this.createTodo(todo);  
      //below line resets text and priority fields to default after user submital
      this.setState({ 
        text: '',
        priority: 0,
        id: 0,
        addingText: '',
        addingPriority: '0'
      })
    }  
  }

  createTodo(todo) {
    let todos = [...this.state.todos];

    todos.push(todo);
    this.setState({ todos });
  }

  handleEditClick(id) {
    for(var j in this.state.todos) {
      if(this.state.todos[j].editEnabled === true) {
        return alert('Slow your roll, now! You can only edit one todo at a time!!');
      } else {
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
    }
  }

  updateTodo(todo) {
    let todos = [...this.state.todos];

    todos.splice(this.editIndexNum, 1, todo);
    this.setState({ todos });
  }

  handleEditingSaveClick(e) {
    e.preventDefault();

    if(this.state.text == '' || this.state.priority == '0') {
      return alert('Please edit your text and/or pick a priority')
    } else {
      let todo = {
        text: this.state.text,
        priority: this.state.priority,
        editEnabled: false,
      }
      this.saveEditingTodo(todo);
      //resetting state after user saves
      this.setState({ 
        text: '',
        priority: 0,
        id: 0
      })
    }
  }

  saveEditingTodo(todo) {
    let todos = [...this.state.todos];

    todos.splice(this.editIndexNum, 1, todo);
    this.setState({ todos });
  }
  //two below for editing todos
  updateEditingTodoText(e) {
    this.setState({
      text: e.target.value
    });
  }

  updateEditingPriority(e) {
    this.setState({
      priority: e.target.value
    });
  }
  //two below for creating new todo
  updateCreateTodoText(e) {
    this.setState({
      addingText: e.target.value
    });
  }

  updateTodoPriority(e) {
    this.setState({
      addingPriority: e.target.value
    });
  }
  //below method for delete button on ViewTodos
  handleDeleteClick(id) {
    for(var i in this.state.todos) {
      if(this.state.todos[i].id == id) {
        var deleteTodo = this.state.todos[i];
        this.deleteIndexNum = i;
      }
    }
    let todos = [...this.state.todos];
    todos.splice(this.deleteIndexNum, 1,);
    this.setState({ todos });
  }
  //below method for changing isCompleted state upon change in checkbox status
  handleFormCheckboxInput(id) {
    for(var i in this.state.todos) {
      if(this.state.todos[i].id == id) {
        var toggleIsCompleted = this.state.todos[i];
        this.toggleIndexNumIsCompleted = i;
      }
    }
    let todo = {
      text: toggleIsCompleted.text,
      priority: toggleIsCompleted.priority,
      editEnabled: toggleIsCompleted.editEnabled,
      id: toggleIsCompleted.id,
      isCompleted: toggleIsCompleted.isCompleted ? false : true
    }
    let todos = [...this.state.todos];
    todos.splice(this.toggleIndexNumIsCompleted, 1, todo);
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
            <AddNewTodo 
              // todos={this.state.todos}
              // text={this.state.text}
              priority={this.state.priority}
              addingText={this.state.addingText}
              addingPriority={this.state.addingPriority}
              handleCreate={this.handleCreate}
              updateCreateTodoText={this.updateCreateTodoText}
              updateTodoPriority={this.updateTodoPriority} />
            <ViewTodos 
              todos={this.state.todos}
              handleEditClick={this.handleEditClick}
              handleDeleteClick={this.handleDeleteClick}
              updateEditingTodoText={this.updateEditingTodoText}
              updateEditingPriority={this.updateEditingPriority}
              handleEditingSaveClick={this.handleEditingSaveClick}
              handleDeleteClick={this.handleDeleteClick}
              handleFormCheckboxInput={this.handleFormCheckboxInput} />
          {/* end row div */}
          </div>  
      {/* end container div */}
      </div> 
    );
  }
}

export default App;
