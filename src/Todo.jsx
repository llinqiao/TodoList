import React, { Component } from "react";

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  render() {
    const { text, completed } = this.props;
   
    return (
      <li onClick = {this.handleCompleted}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }

  handleCompleted = () =>{
    console.log("+" + this.props.id)
    this.props.onClick(this.props.id)
  }

}

export default Todo;
