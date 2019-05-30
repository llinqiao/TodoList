import React, {Component} from 'react'

class AddTodo extends Component {
  
  render () {
    console.log(this.props)
    return (
      <div>
        <input value = {this.props.text} onChange = {this.setTodoText.bind(this)}></input>
        <button onClick = {this.handleTodo}>Add</button>
      </div>
    )
  }


  handleTodo = ()=>{
    this.props.addTodo(this.props.text)
    this.props.setTodoText('')
  
  }
    
  
  setTodoText (event) {
   this.props.setTodoText(event.target.value)
    
  }

}

export default AddTodo