// ProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://your-api-url/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <h2>Products</h2>
            <ProductList products={products} onItemClick={handleProductClick} />
            {selectedProduct && <ProductDetail product={selectedProduct} />}
        </div>
    );
}

export default ProductPage;

