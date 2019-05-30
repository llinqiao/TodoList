import React, { Component } from "react";
import AddTodoContainer from "./container/AddTodoContainer";
import FooterContainer from "./container/FooterContainer";
import TodoListContainer from "./container/TodoListContainer";



class App extends Component {
 
  render() {
   

    return (
      <div>
       <AddTodoContainer />
       <TodoListContainer />
       <FooterContainer />
      </div>
    );
  }
  
}

export default App;
