import React, {Component} from 'react'
import Todo from './Todo'


class TodoList extends Component {

  render () {
    const {todos,toogleTodo,deleteTodo} = this.props;
    console.log("aaa",this.props)
    return (
      <ul>
        {todos.map((item ,index)=> {
        return <Todo  key = {item.id}  {...item} onClick = {() => {toogleTodo(item.id)}} index = {index} deleteTodo ={() =>deleteTodo(index)}/>
      })}
      </ul>
    )
  }
}

export default TodoList