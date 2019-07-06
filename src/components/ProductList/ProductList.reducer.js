import { ADD_ITEM_TO_CART } from './ProductList.action'

const initialState = {
  selectedItems: []
}

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload]
      }
  
    default:
      return state
  }
}