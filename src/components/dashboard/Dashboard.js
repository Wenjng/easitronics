import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import Notification from './Notification'

class Dashboard extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <ProductList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard