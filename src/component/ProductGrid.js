
import React from 'react';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
