import React from 'react';

import './Products.css';

const myProducts = [
  '2.4 mm RF COAXIAL CONNECTORS',
  'BMA RF COAXIAL CONNECTORS',
  'BNC REVERSE POLARITY CONNECTORS',
  'MCX REVERSE POLARITY CONNECTORS',
  'MCX COAXIAL CONNECTORS'
];

function ListItem(props) {
    return <li key={props.value}><a href='https://drive.google.com/open?id=12fk5c5zj-R3Brwlwf7pEB1H8Q_b3PqQs'>{props.value}</a></li>;
}

function Products() {
  const listItems = myProducts;

  return (
    <div className="Products">
      <ul>
        {listItems.map((p) =>
          <ListItem value={p} />
        )}
      </ul>
    </div>
  );
}

export default Products;