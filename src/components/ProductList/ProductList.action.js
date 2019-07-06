export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

export function addItemToCartAction(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
}

export const addItemToCart = (item) => {
  return (dispatch) => {
    dispatch(addItemToCartAction(item))
  }
}