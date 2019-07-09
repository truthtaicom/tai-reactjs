import { connect } from 'react-redux'
import { addItemToCart } from './ProductList.action'
import ProductList from './'

export const prmotedProductsSelector = (state) => {
  return state.productListReducer.data.filter(elm => elm.price > elm.final_price)
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state.productListReducer.selectedItems,
    proomotedProducts: prmotedProductsSelector(state)
  }
}

const mapDispatchToProps = {
  addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)