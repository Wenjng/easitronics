import React from 'react'
import ProductSummary from './ProductSummary'

const ProductList = ({products}) => {
  console.log(products);
  return (
    <div className="product-list section">
      { products && products.map( proj => {
        return (
          <ProductSummary product={proj} key={proj.id} />
        )
      })}
    </div>
  )
}

export default ProductList