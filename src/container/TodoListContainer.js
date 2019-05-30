import {connect} from 'react-redux'
import TodoList from '../component/TodoList'
import {toogleTodo, deleteTodo} from '../action'

const getFilter =  (todos,filter) => {
  switch (filter) {
    case 'All' : 
      return todos
    
    case 'Action' : 
      return todos.filter(item => !item.completed)
    
    case 'Completed' : 
      return todos.filter(item => item.completed)
    default : 
      return  new Error('unknow filter:' +  filter);
  }
}

const mapStateToProps = (state) =>({
    todos : getFilter(state.todos,state.filter)
})

const mapDispatchToProps  = (dispatch) =>({
  toogleTodo : id => dispatch (toogleTodo(id)),
  deleteTodo: index => dispatch(deleteTodo(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)