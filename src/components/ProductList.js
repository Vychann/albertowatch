import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

