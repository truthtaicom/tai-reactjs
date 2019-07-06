import { createStore, combineReducers } from 'redux'
import loginReducer from './components/LoginForm/LoginForm.reducer'

export const store = createStore(combineReducers({
  loginReducer
}))