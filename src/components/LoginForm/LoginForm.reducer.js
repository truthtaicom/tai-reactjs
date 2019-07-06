import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './LoginForm.action'

const initialState = {
  loading: false,
  data: null,
  error: null
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
  
    default:
      return state
  }
}