import {connect} from 'react-redux'
import AddTodo from '../component/AddTodo'
import {addTodo,setTodoText} from '../action'


const mapStateToProps = (state) => ({
  text : state.text
})

const mapDispatchToProps = (dispatch) => ({
  addTodo : text => dispatch(addTodo(text)),
  setTodoText : text => dispatch(setTodoText(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)