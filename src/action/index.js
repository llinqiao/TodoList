import {ADD_TODO,TOOGLE_TODO,SET_FILTER,SET_TODO_TEXT,DELETE_TODO} from './actionType'

let nextTodoId = 0
export  const addTodo = (text) => ({
  type:ADD_TODO,
  id:nextTodoId++,
  text,
  completed:false
})

export  const toogleTodo = (id) => ({
  type:TOOGLE_TODO,
  id
})

export  const setFilter = (filter) => ({
  type:SET_FILTER,
  filter
})
export  const setTodoText = (text) => ({
  type:SET_TODO_TEXT,
  text
})

export const deleteTodo = (index) => ({
  type:DELETE_TODO,
  index
})