import {createStore} from 'redux'
import rootReducer from './reducer'
import {addTodo,toogleTodo,setFilter,setTodoText} from './action'

const store = createStore(rootReducer)

console.log(store.getState())

const change = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('learn'))
store.dispatch(toogleTodo(0))
store.dispatch(setFilter('Action'))
store.dispatch(setTodoText('come'))

change()

export default store