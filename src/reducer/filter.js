import {SET_FILTER} from '../action/actionType'

const filter = (state = "All",action) => {
  switch (action.type){
    case SET_FILTER :{
      return action.filter
    }
    default :{
      return state
    }
  }

}

export default filter