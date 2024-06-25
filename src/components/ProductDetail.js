import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Add more details if needed */}
            </div>
        </div>
    );
}

export default ProductDetail;
