import React, { Component } from "react";
import Addtodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const filter = "All";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: "All"
    };
    this.todoId = 0;
  }
  render() {
    const { filter, todos } = this.state;

    return (
      <div>
        <Addtodo addTodo={this.addTodo} />
        <TodoList todos={this.getFilter()} onClick={this.toogleTodoCompleted} />
        <Footer onClick={this.toogleFilter}/> 
      </div>
    );
  }

  getFilter = ()=>{
    const currentFilter = this.state.filter
    return this.state.todos.filter(item => {
      if(currentFilter === "All"){
        return true
      }else if(currentFilter === "Action"){
        return !item.completed
      }else if(currentFilter === "Completed"){
        return item.completed
      }
    })
  }

  addTodo = text => {
    const newTodo = {
      id: this.todoId++,
      text: text,
      completed: false
    };

    const todoList = [newTodo, ...this.state.todos];
    this.setState({
      todos: todoList
    });
    console.log(this.state.todos);
  };//添加待办事项

  toogleTodoCompleted = id => {
    const newTodos = this.state.todos.map(item => {
      if (item.id === id) {
        item = {
          ...item,
          completed: !item.completed
        };
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      todos: newTodos
    });
  };//改变待办事项是否完成

  toogleFilter = (index) => {
    this.setState({
      filter:index
    })
  }
}

export default App;
