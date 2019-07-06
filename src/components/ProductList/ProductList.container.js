import { connect } from 'react-redux'
import { addItemToCart } from './ProductList.action'
import ProductList from './'

const mapStateToProps = (state) => {
  return {
    selectedItems: state.productListReducer.selectedItems
  }
}

const mapDispatchToProps = {
  addItemToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)