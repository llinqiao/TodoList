import React, { Component } from "react";

class Todo extends Component {
  
  
  render() {
    const { text, completed , index , deleteTodo} = this.props;
    console.log('delete',this.props)
    return (
    <div>
      <li onClick = {this.handleCompleted}
        style={{
          textDecoration: completed ? "line-through" : "none",display:"inline-block"
        }}
      >
        {text}
      </li>
      <button onClick = {() => {deleteTodo()}}>x</button>
    </div>
    );
  }

  handleCompleted = () =>{
    this.props.onClick()
  }

}

export default Todo;
