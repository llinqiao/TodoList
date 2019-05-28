import React, {Component} from 'react'
import Todo from './Todo'


class TodoList extends Component {
  


  render () {
    const {todos} = this.props;
    return (
      <ul>
        {todos.map(item => {
        return <Todo  key = {item.id}  {...item} onClick = {this.props.onClick} />
      })}
      </ul>
    )
  }
}

export default TodoList