import React, { useState } from 'react';
import './App.css';
import result from './data.json'
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import NotFoundPage from './components/NotFoundPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [selectedItem, setSelectedItem] = useState()
  const [isShowSearchModal, setSearchModal] = useState(true)
  const findSelectedItem = (productId) => {
      const item = result.data.find(item => item.product_id === parseInt(productId,10))
      setSelectedItem(item)
  }

  const onShowSearch = () => {
    setSearchModal((state) => !state)
  }

  return (
    <Router>
        <Layout onShowSearch={onShowSearch}> 
            <Switch>
                <Route exact path="/" render={() => <ProductList data={result.data} />} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <PrivateRoute path="/product-detail/:productId" render={
                    (propsOfRouter) => (
                        <ProductDetail
                            findSelectedItem={findSelectedItem}
                            selectedItem={selectedItem}
                            {...propsOfRouter}
                        />
                    )
                } />
                <PrivateRoute component={NotFoundPage} />
            </Switch>
            
            {
                isShowSearchModal &&
                <div className="search-wrap" onClick={onShowSearch}>
                    <div className="search-inner">
                        <i className="fas fa-times search-close" id="search-close"></i>
                        <div className="search-cell">
                            <form method="get">
                                <div className="search-field-holder">
                                    <input type="search" className="main-search-input" placeholder="Search Entire Store..." />
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            }
            
        </Layout>      
    </Router>
  );
}

export default App;
