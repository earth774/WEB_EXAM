import { createStore } from 'redux'
const initialState = {
  name:"",
  data:[],
  pending: false,
  err: '',
  completed: false
}
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const userReducers = (state = initialState, action) => {
  switch(action.type){
    case "SET_NAME_PENDING":
      break;
    case "SET_NAME_REJECTED":
      break;
    case "SET_NAME_FULFILLED":
      break;

    case "GET_NAME_PENDING":
      break;
    case "GET_NAME_FULFILLED":
      state = {
        ...state,
        name: action.payload.name,
        pending: false,
        err: '',
        completed: true
      }
      break;
      case "CLE_DATA_FULFILLED": 
      state = {
        ...state,
        data: "",
        pending: false,
        err: '',
        completed: true
      }
      break;
    case "GET_DATA_FULFILLED": 
    state = {
        ...state,
        data: action.payload.data,
        pending: false,
        err: '',
        completed: true
      } 
      let store = createStore(todos , window.STATE_FROM_SERVER)
    store.dispatch({
      type: 'ADD_TODO',
      data: action.payload.data[0],
    })
      break;
    case "GET_NAME_REJECTED":
      console.log(action);
      state = {
        ...state,
        pending: false,
        err: action.error,
        completed: false
      }
      break;
    default:
      break;
  }
  return state;
}

export default userReducers;
