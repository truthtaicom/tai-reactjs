import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './components/LoginForm/LoginForm.reducer'
import productListReducer from './components/ProductList/ProductList.reducer'
import thunk from 'redux-thunk'

export const store = createStore(
  combineReducers({
    loginReducer,
    productListReducer
  }),
  applyMiddleware(thunk)
)