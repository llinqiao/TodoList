import { ADD_TODO, TOOGLE_TODO,DELETE_TODO } from "../action/actionType";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          filter: "All",
          id: action.id
        }
      ];

    case TOOGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case DELETE_TODO :
    console.log('haiyou',state,)
      state.splice(action.index,1)
      return state
      // return state.filter((todo) => {
      //   return todo.id === action.id? false:true
      // })

    default: {
      return state;
    }
  }
};
export default todos;
