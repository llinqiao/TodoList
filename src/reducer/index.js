import filter from './filter'
import text from './text'
import todos from './todos'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  filter,
  text,
  todos,
})

export default rootReducer