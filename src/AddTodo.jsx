import React, {Component} from 'react'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text : " "
    }
  }
  render () {
    return (
      <div>
        <input value = {this.state.text} onChange = {this.setTodoText.bind(this)}></input>
        <button onClick = {this.handleTodo}>Add</button>
      </div>
    )
  }


  handleTodo = ()=>{
    this.props.addTodo(this.state.text)
    this.setState({
      text:" "
    })
  }
    
  
  setTodoText (event){
    this.setState({
      text:event.target.value
    })

    
  }

}

export default AddTodo