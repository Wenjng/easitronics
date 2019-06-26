import React from 'react'

const ProductDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
      <div className="container section product-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Product Title - {id}</span>
                <p>This shows the detail of product</p>
            </div>
            <div className="card-action grey-text-grey-lighten-2">
              <div>More detail here</div>
            </div>
        </div>
      </div>
    )
}

export default ProductDetails

