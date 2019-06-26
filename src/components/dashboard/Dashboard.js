import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import Notification from './Notification'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <ProductList products={products}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}
export default connect(mapStateToProps)(Dashboard)